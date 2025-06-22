import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../prisma.service' // Укажите правильный путь

@Injectable()
// Расширяем класс PassportStrategy, передавая ему стратегию JWT из пакета passport-jwt
// Стратегия обеспечивает безапасный способ проверки что запросы выполняются проверенным пользователем, 
// и предоставляет данные пользователя для последующей работы.
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService
	) {
		// Получаем секретный ключ JWT из конфигурации (строка)
		const jwtSecret = configService.get<string>('JWT_SECRET')
		// Если ключ не определён — выбрасываем ошибку при инициализации стратегии
		if (!jwtSecret) {
			throw new Error('JWT_SECRET must be defined in the environment variables')
		}
		// Вызываем конструктор базового класса с настройками стратегии:
    		// - способ извлечения токена из заголовка Authorization Bearer
    		// - секретный ключ для проверки подписи токена
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: jwtSecret
		})
	}

	// // Метод validate вызывается автоматически после успешной валидации JWT
  	// payload — полезная нагрузка токена, здесь ожидается объект с id пользователя
	async validate(payload: { id: number }) {
		// Ищем пользователя в базе по id из токена
		const user = await this.prisma.user.findUnique({ where: { id: payload.id } })
		// Если пользователь не найден — выбрасываем исключение UnauthorizedExceptio
		if (!user) {
			throw new UnauthorizedException('User not found')
		}
		// Возвращаем найденного пользователя. Этот объект будет доступен в request.user
		return user
	}
}
// Данная стратегия нужна для аунтефикации пользователей при помощи WT (JSON Web Token) в приложении на NestJS.
// Извлекает JWT-токен из заголовка HTTP-запроса Authorization (Bearer token).
// Проверяет подпись токена с помощью секретного ключа, чтобы убедиться, что токен подлинный и не был подделан.
// После успешной проверки извлекает из токена полезную нагрузку (payload), например, идентификатор пользователя.
// На основе этого идентификатора ищет пользователя в базе данных.
// Если пользователь найден, возвращает его данные, которые затем становятся доступными в обработчиках запросов (например, в request.user).
// Если пользователь не найден или токен недействителен, выбрасывает ошибку Unauthorized, блокируя доступ.
