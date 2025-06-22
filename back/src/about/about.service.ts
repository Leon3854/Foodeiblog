import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateAboutDto } from './dto/create-about.dto'
import { AboutResponseDto } from './dto/response-about.dto'
import { UpdateAboutDto } from './dto/update-about.dto'

@Injectable()
export class AboutService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return await this.prisma.about.findMany()
	}

	async getById(id: number): Promise<AboutResponseDto> {
		const about = await this.prisma.about.findUnique({
			where: { id }
		})

		if (!about) {
			throw new NotFoundException(`About with id ${id} not found`)
		}

		return {
			id: about.id,
			createdAt: about.createdAt,
			updatedAt: about.updatedAt,
			title: about.title || undefined,
			text: about.text || undefined
		}
	}

	async createAbout(dto: CreateAboutDto): Promise<AboutResponseDto> {
		const about = await this.prisma.about.create({
			data: {
				title: dto.title,
				text: dto.text
			}
		})

		return {
			id: about.id,
			createdAt: about.createdAt,
			updatedAt: about.updatedAt,
			title: about.title || undefined,
			text: about.text || undefined
		}
	}

	async updateAboutById(
		id: number,
		updateData: UpdateAboutDto
	): Promise<AboutResponseDto> {
		// 1. Проверяем существование записи
		const existingAbout = await this.prisma.about.findUnique({
			where: { id }
		})

		if (!existingAbout) {
			throw new NotFoundException(`About with id ${id} not found`)
		}
		const updatedAbout = await this.prisma.about.update({
			where: { id },
			data: {
				title: updateData.title ?? existingAbout.title,
				text: updateData.text ?? existingAbout.text
			}
		})
		return {
			id: updatedAbout.id,
			createdAt: updatedAbout.createdAt,
			updatedAt: updatedAbout.updatedAt,
			title: updatedAbout.title || undefined,
			text: updatedAbout.text || undefined
		}
	}

	async deleteAboutById(id: number): Promise<{ id: number }> {
		return await this.prisma.about.delete({
			where: { id },
			select: { id: true }
		})
	}
}
