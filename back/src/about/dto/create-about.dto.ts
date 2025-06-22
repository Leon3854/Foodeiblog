import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsOptional, IsString } from 'class-validator'

export class CreateAboutDto {
	@ApiProperty({
		example: 'О нашей компании',
		description: 'Заголовок раздела',
		required: false
	})
	@IsString()
	@IsOptional()
	title?: string

	@ApiProperty({
		example: 'Мы работаем с 2010 года...',
		description: 'Основной текст раздела',
		required: false
	})
	@IsString()
	@IsOptional()
	text?: string
}
