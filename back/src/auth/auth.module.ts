import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { PrismaService } from 'src/prisma.service'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from 'src/config/jwt.config'
import { UserService } from 'src/user/user.service'

@Module({
	controllers: [AuthController],
	providers: [AuthService, PrismaService, UserService],
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		ConfigModule
	]
})
export class AuthModule {}
