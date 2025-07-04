import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'You have password not more 6 characters long'
	})
	@IsString()
	password: string

	@IsString()
	@IsOptional()
	name?: string
}
