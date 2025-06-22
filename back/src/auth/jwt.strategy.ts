import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../prisma.service' // Укажите правильный путь

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService
	) {
		const jwtSecret = configService.get<string>('JWT_SECRET')
		if (!jwtSecret) {
			throw new Error('JWT_SECRET must be defined in the environment variables')
		}

		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: jwtSecret
		})
	}

	// альтернативный вариант
	// super({
	// 	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() as (req: Request) => string | null,
	// 	secretOrKey: jwtSecret
	// });

	async validate(payload: { id: number }) {
		const user = await this.prisma.user.findUnique({ where: { id: payload.id } })
		if (!user) {
			throw new UnauthorizedException('User not found')
		}
		return user
	}
}
