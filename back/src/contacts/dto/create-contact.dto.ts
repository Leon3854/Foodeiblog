import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class CreateContactDto {
	@ApiProperty({
		example: 'Контакты',
		description: 'Заголовок раздела',
		required: false
	})
	@IsString()
	@IsOptional()
	title?: string

	@ApiProperty({
		example: 'Основной текст',
		description: 'Текст раздела',
		required: false
	})
	@IsString()
	@IsOptional()
	text?: string

	@ApiProperty({
		example: 'Имя',
		description: 'ФИО пользователя',
		required: false
	})
	@IsString()
	@IsOptional()
	name?: string

	@ApiProperty({
		example: 'Email',
		description: 'Email the user',
		required: false
	})
	@IsString()
	@IsOptional()
	email?: string

	@ApiProperty({
		example: 'Адерсс сайта',
		description: 'Адресс сайта',
		required: false
	})
	@IsString()
	@IsOptional()
	website?: string

	@ApiProperty({
		example: 'Сообщение',
		description: 'Сообщение пользователя',
		required: false
	})
	@IsString()
	@IsOptional()
	message?: string

	@ApiProperty({
		example: 'Телефон',
		description: 'Телефон пользователя номер',
		required: false
	})
	@IsString()
	@IsOptional()
	phone?: string

	@ApiProperty({
		example: 'Адресс',
		description: 'Адресс пользователя',
		required: false
	})
	@IsString()
	@IsOptional()
	address?: string
}
