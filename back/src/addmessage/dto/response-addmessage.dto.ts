import { ApiProperty } from '@nestjs/swagger'

export class ResponseAddMessageDto {
	@ApiProperty({ example: 1 })
	id: number

	@ApiProperty({ example: '2023-10-01T12:00:00Z' })
	createdAt: Date

	@ApiProperty({ example: 'Иван Иванов' })
	name: string

	@ApiProperty({ example: 'user@example.com' })
	email: string

	@ApiProperty({ example: 'example.com' })
	website: string

	@ApiProperty({ example: 'Помогите с проблемой...' })
	message: string

	@ApiProperty({ example: '+79001234567', required: false })
	phone?: string | null

	@ApiProperty({ required: false })
	adminNotes?: string | null

	@ApiProperty({ example: 'new', enum: ['new', 'read', 'answered'] })
	status: string
}
