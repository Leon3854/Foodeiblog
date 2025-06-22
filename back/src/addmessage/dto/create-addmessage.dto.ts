import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateAddMessageDto {
	@ApiProperty({ example: 'Иван Иванов' })
	@IsString()
	@IsNotEmpty()
	name: string

	@ApiProperty({ example: 'user@example.com' })
	@IsEmail()
	@IsNotEmpty()
	email: string

	@ApiProperty({ example: 'user@example.com' })
	@IsString()
	@IsNotEmpty()
	website: string

	@ApiProperty({ example: 'Помогите с проблемой...' })
	@IsString()
	@IsNotEmpty()
	message: string

	@ApiProperty({ example: '+79001234567', required: false })
	@IsString()
	@IsOptional()
	phone?: string

	@ApiProperty({ example: '+79001234567', required: false })
	@IsString()
	@IsOptional()
	status?: string

	@ApiProperty({ example: 'We are read you are message', required: false })
	@IsString()
	@IsOptional()
	adminNotes?: string
}
