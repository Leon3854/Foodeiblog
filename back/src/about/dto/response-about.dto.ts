import { ApiProperty } from '@nestjs/swagger'

export class AboutResponseDto {
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
}
