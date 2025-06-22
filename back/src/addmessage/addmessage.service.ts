import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateAddMessageDto } from './dto/create-addmessage.dto'
import { ResponseAddMessageDto } from './dto/response-addmessage.dto'

@Injectable()
export class AddmessageService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return await this.prisma.contactMessage.findMany()
	}

	async getMessageById(id: number): Promise<ResponseAddMessageDto> {
		const message = await this.prisma.contactMessage.findUnique({
			where: { id }
		})
		if (!message) throw new NotFoundException(`Message with this ${id} not found`)

		return {
			id: message.id,
			createdAt: message.createdAt,
			name: message.name,
			email: message.email,
			website: message.website,
			message: message.message,
			phone: message.phone,
			status: message.status
		}
	}

	async createMessage(dto: CreateAddMessageDto): Promise<ResponseAddMessageDto> {
		return await this.prisma.contactMessage.create({
			data: {
				name: dto.name,
				email: dto.email,
				website: dto.website,
				message: dto.message,
				phone: dto.phone,
				adminNotes: dto.adminNotes,
				status: dto.status || 'new'
			}
		})
	}

	async delete(id: number): Promise<{ id: number }> {
		return await this.prisma.contactMessage.delete({
			where: { id },
			select: { id: true }
		})
	}
}
