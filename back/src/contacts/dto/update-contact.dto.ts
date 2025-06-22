import { IsOptional, IsString } from 'class-validator'

export class UpdateContactDto {
	@IsString()
	@IsOptional()
	title?: string

	@IsString()
	@IsOptional()
	text?: string

	@IsString()
	@IsOptional()
	name?: string

	@IsString()
	@IsOptional()
	email?: string

	@IsString()
	@IsOptional()
	website?: string

	@IsString()
	@IsOptional()
	message?: string

	@IsString()
	@IsOptional()
	phone?: string

	@IsString()
	@IsOptional()
	address?: string
}
