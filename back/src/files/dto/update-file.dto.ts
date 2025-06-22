import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator'
import { EntityType } from '@prisma/client'

export class UpdateFileDto {
	@IsString()
	@IsOptional()
	url?: string

	@IsString()
	@IsOptional()
	nameFile?: string

	@IsEnum(EntityType)
	@IsOptional()
	entityType?: EntityType

	@IsInt()
	@IsOptional()
	entityId?: number
}
