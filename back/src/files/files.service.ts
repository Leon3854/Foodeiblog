import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { FileResponse } from './dto/file.response'
import { Prisma } from '@prisma/client'
import { UpdateFileDto } from './dto/update-file.dto'

@Injectable()
export class FilesService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return await this.prisma.files.findMany()
	}

	async createFile(
		entityType: 'about' | 'contacts',
		entityId: number,
		fileData: { url: string; name: string }
	): Promise<FileResponse> {
		const data: any = {
			fileUrl: fileData.url,
			nameFile: fileData.name
		}
		// Устанавливаем связь в зависимости от типа сущности
		if (entityType === 'about') {
			data.about = { connect: { id: entityId } }
		} else if (entityType === 'contacts') {
			data.contacts = { connect: { id: entityId } }
		}
		const file = await this.prisma.files.create({ data })

		return {
			id: file.id,
			url: file.fileUrl,
			nameFile: file.nameFile
		}
	}

	async updateFile(
		fileId: number,
		updateDto: UpdateFileDto
	): Promise<FileResponse> {
		// Преобразование DTO в Prisma-формат
		const updateInput: Prisma.FilesUpdateInput = {
			...(updateDto.url !== undefined && { fileUrl: updateDto.url }),
			...(updateDto.nameFile !== undefined && { nameFile: updateDto.nameFile }),
			...(updateDto.entityType !== undefined && {
				entityType: updateDto.entityType
			}),
			...(updateDto.entityId !== undefined && { entityId: updateDto.entityId })
		}

		const updatedFile = await this.prisma.files.update({
			where: { id: fileId },
			data: updateInput
		})

		// Соответствие FileResponse
		return {
			id: updatedFile.id,
			url: updatedFile.fileUrl,
			nameFile: updatedFile.nameFile
		}
	}

	// private async checkEntityExists(
	// 	entityType: 'about' | 'contacts',
	// 	entityId: number
	// ): Promise<boolean> {
	// 	const model: {
	// 		findUnique: (args: {
	// 			where: { id: number }
	// 			select?: { id: true }
	// 		}) => Promise<{ id: number } | null>
	// 	} = this.prisma[entityType]
	// 	const entity = await model.findUnique({
	// 		where: { id: entityId },
	// 		select: { id: true }
	// 	})
	// 	return !!entity
	// }

	async deleteImage(id: number) {
		const existingImage = await this.prisma.files.findUnique({
			where: { id: id }
		})

		if (!existingImage) throw new NotFoundException('Image was not found')

		try {
			const deleteImage = await this.prisma.files.delete({
				where: { id: id }
			})
			if (!deleteImage) throw new NotFoundException('Image was not found')
			return deleteImage
		} catch (error) {
			return new Error('An error occurred while deleting the image')
		}
	}
}
