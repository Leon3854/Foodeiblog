import { Injectable, NotFoundException, Delete } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { ResponseContactsDto } from './dto/response-contacts.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ContactsService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.contacts.findMany()
	}

	async getContactsById(id: number): Promise<ResponseContactsDto> {
		const contacts = await this.prisma.contacts.findUnique({
			where: { id }
		})
		if (!contacts) throw new NotFoundException(`Contacts with id ${id} not found`)

		return {
			id: contacts.id,
			createdAt: contacts.createdAt,
			updatedAt: contacts.updatedAt,
			title: contacts.title || undefined,
			text: contacts.text || undefined
		}
	}

	async createContacts(dto: CreateContactDto): Promise<ResponseContactsDto> {
		const contacts = await this.prisma.contacts.create({
			data: {
				title: dto.title,
				text: dto.text,
				name: dto.name,
				email: dto.email,
				website: dto.website,
				message: dto.message,
				phone: dto.phone,
				address: dto.address
			}
		})

		return {
			id: contacts.id,
			createdAt: contacts.createdAt,
			updatedAt: contacts.updatedAt,
			title: contacts.title || undefined,
			text: contacts.text || undefined,
			name: contacts.name || undefined,
			email: contacts.email || undefined,
			website: contacts.website || undefined,
			message: contacts.message || undefined,
			phone: contacts.phone || undefined,
			address: contacts.address || undefined
		}
	}

	async updateContacts(
		id: number,
		updateData: UpdateContactDto
	): Promise<ResponseContactsDto> {
		// 1. Проверяем существование записи
		const existingId = await this.prisma.contacts.findUnique({
			where: { id }
		})

		if (!existingId)
			throw new NotFoundException(`Contacts with id ${id} not found`)

		// 2. Обновляем содержимое по его айди
		const updateContacts = await this.prisma.contacts.update({
			where: { id },
			data: {
				title: updateData.title ?? existingId.title,
				// это оператор нулевого присваивания (??) (Nullish Coalescing Operator) в JavaScript/TypeScript.
				// Если updateData.title не null и не undefined то берем existindId.title
				text: updateData.text ?? existingId.text,
				name: updateData.title ?? existingId.name,
				email: updateData.text ?? existingId.email,
				website: updateData.text ?? existingId.website,
				message: updateData.text ?? existingId.message,
				phone: updateData.text ?? existingId.phone,
				address: updateData.text ?? existingId.address
			}
		})
		return {
			id: updateContacts.id,
			createdAt: updateContacts.createdAt,
			updatedAt: updateContacts.updatedAt,
			title: updateContacts.title || undefined,
			text: updateContacts.text || undefined,
			name: updateContacts.name || undefined,
			email: updateContacts.email || undefined,
			website: updateContacts.website || undefined,
			message: updateContacts.message || undefined,
			phone: updateContacts.phone || undefined,
			address: updateContacts.phone || undefined
		}
	}

	async DeleteContactsById(id: number): Promise<{ id: number }> {
		return await this.prisma.contacts.delete({
			where: { id },
			select: { id: true }
		})
	}
}
