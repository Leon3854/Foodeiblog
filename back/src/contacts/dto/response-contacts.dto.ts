import { ApiProperty } from '@nestjs/swagger'

export class ResponseContactsDto {
	@ApiProperty()
	id: number

	@ApiProperty()
	createdAt: Date

	@ApiProperty()
	updatedAt: Date

	@ApiProperty({ required: false })
	title?: string

	@ApiProperty({ required: false })
	text?: string

	@ApiProperty({ required: false })
	name?: string

	@ApiProperty({ required: false })
	email?: string

	@ApiProperty({ required: false })
	website?: string

	@ApiProperty({ required: false })
	message?: string

	@ApiProperty({ required: false })
	phone?: string

	@ApiProperty({ required: false })
	address?: string
}
