import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator'

export class FileResponse {
	@IsString()
	url: string

	@IsString()
	nameFile: string

	// @IsNumber()
	@IsInt()
	@IsOptional()
	id?: number
}
