import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { AuthDto } from './dto/auth.dto'
import { hash, verify } from 'argon2'
import { User } from '@prisma/client'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private userService: UserService
	) {}

	// Логируем пользователя по dto
	async login(dto: AuthDto) {
		// проверяем на совпадение пользователя с полями dto
		const user = await this.validateUser(dto)
		// Генерируем access и refresh токены для пользователя
		const tokens = await this.issueTokens(user.id)
		// Возвращаем объект с выбранными полями пользователя и токенами
		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	// Обновляем токены доступа и обновления пользователя по refreshToken
	async getNewTokens(refreshToken: string) {
		// Асинхронно проверяем валидность refreshToken с помощью jwt.verifyAsync
		const result = await this.jwt.verifyAsync(refreshToken)
		
		// Если токен недействителен или истёк, выбрасываем исключение UnauthorizedException
		if (!result) throw new UnauthorizedException('Invalid refresh token')

		// Получаем пользователя по id, извлечённому из payload токена
		const user = await this.userService.byId(result.id)
		// обращаемся к токенам по айди пользователя 
		const tokens = await this.issueTokens(user.id)
		// Возвращаем объект с выбранными полями пользователя и новыми токенами
		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	// Регестирруем пользователя по dto
	async register(dto: AuthDto) {
		// Ищем пользователя по уникальному email
		const oldUser = await this.prisma.user.findUnique({
			where: { email: dto.email }
		})
		// Условие в котором если пользователь найден выбрасываем исключение с сообщением
		if (oldUser) throw new BadRequestException('User already exists')

		// Создаем пользователя с email и хешируем пароль
		const user = await this.prisma.user.create({
			data: {
				email: dto.email, //присваиваем это значение полю email в создаваемой записи
				password: await hash(dto.password) // присваием это значение полю password в созданной записи
			}
		})

		// Получаем access и refresh токены для нового пользователя
		const tokens = await this.issueTokens(user.id)
		
		// Возвращаем объект с выбранными полями пользователя и токенами
		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	// Определяем продолжительность токена доступа и токена обновления по id пользователя
	private async issueTokens(userId: number) {
		// формирует объект с данными, которые будут зашиты в токен через индификатор пользователя(userId).
		const data = { id: userId }

		// создаем токен доступа в который добавляем объактс данными пользователя
		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})

		// создаем токен обновления с добавлением данных пользователя 
		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7h'
		})
		// возвращаем объект с токенами 
		return { accessToken, refreshToken }
	}

	// Возвращаем данные пользователя по выбранными полям - id, email, isAdmin
	private returnUserFields(user: Partial<User>) {
		return {
			id: user.id,
			email: user.email,
			isAdmin: user.isAdmin
		}
	}

	// Проверяем пользователя чтерез dto(data transfer object)
	private async validateUser(dto: AuthDto) {
		// Ищем пользователя по уникальному email значение которого должно совпасть с dto.email
		const user = await this.prisma.user.findUnique({
			where: { email: dto.email }
		})
		// проверяем и если не совпали выбрасываем исключение с сообщением
		if (!user) throw new NotFoundException('User not found')

		// проверяем на совподение паролей которые должны совпасть
		const isValid = await verify(user.password, dto.password)
		// если не совпали выводим иключение с текстом
		if (!isValid) throw new UnauthorizedException('Invalid password')

		// возвращаем пользователя
		return user
	}
}
