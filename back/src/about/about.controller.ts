import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	ParseIntPipe,
	BadRequestException,
	Put
} from '@nestjs/common'
import { AboutService } from './about.service'
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger'
import { AboutResponseDto } from './dto/response-about.dto'
import { CreateAboutDto } from './dto/create-about.dto'
import { UpdateAboutDto } from './dto/update-about.dto'

@Controller('abouts')
export class AboutController {
	constructor(private readonly aboutService: AboutService) {}

	@Get()
	async getAll() {
		return await this.aboutService.getAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get about entry by ID' })
	@ApiParam({ name: 'id', type: Number, description: 'About entry ID' }) // Описание параметра
	@ApiResponse({
		status: 200,
		description: 'About entry found',
		type: AboutResponseDto // Указываем тип ответа
	})
	@ApiResponse({
		status: 404,
		description: 'About entry not found'
	})
	async getById(@Param('id') id: string): Promise<AboutResponseDto> {
		const numericId = +id // Быстрое преобразование в число
		if (isNaN(numericId)) {
			throw new BadRequestException('ID must be a number')
		}
		return this.aboutService.getById(numericId)
	}

	@Post()
	@ApiOperation({ summary: 'Create about section' })
	@ApiBody({ type: CreateAboutDto })
	@ApiResponse({
		status: 201,
		type: AboutResponseDto,
		description: 'Successfully created'
	})
	async create(
		@Body() dto: CreateAboutDto // NestJS автоматически создаёт экземпляр DTO
	): Promise<AboutResponseDto> {
		return this.aboutService.createAbout(dto) // Передаём готовый объект
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update about section by ID' })
	@ApiParam({
		name: 'id',
		type: Number,
		description: 'ID of the about section to update',
		example: 1
	})
	@ApiBody({ type: UpdateAboutDto })
	@ApiResponse({
		status: 200,
		type: AboutResponseDto,
		description: 'Successfully updated about section'
	})
	@ApiResponse({
		status: 404,
		description: 'About section not found'
	})
	async updateAbout(
		@Param('id') id: string,
		@Body() updateData: UpdateAboutDto
	): Promise<AboutResponseDto> {
		return this.aboutService.updateAboutById(+id, updateData)
	}

	//
	@Delete(':id')
	async deleteById(
		@Param('id', ParseIntPipe) id: number
	): Promise<{ id: number }> {
		// Изменён возвращаемый тип
		return this.aboutService.deleteAboutById(id)
	}
}
