import { IsArray, IsOptional, IsString } from 'class-validator'

export class UpdateAboutDto {
	@IsString()
	@IsOptional()
	title?: string

	@IsString()
	@IsOptional()
	text?: string
}
