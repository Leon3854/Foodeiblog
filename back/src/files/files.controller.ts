import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post,
	Put,
	Query,
	UploadedFile,
	UploadedFiles,
	UseInterceptors,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { FilesService } from './files.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { FileResponse } from './dto/file.response'
import { UpdateFileDto } from './dto/update-file.dto'

@Controller('files')
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@Get()
	async getAll() {
		return await this.filesService.getAll()
	}

	@Post(':type/:id')
	@HttpCode(200)
	// @Auth('admin')
	async create(
		@Param('type') entityType: 'about' | 'contacts',
		@Param('id') entityId: string,
		@Body() fileData: { url: string; name: string } // Получаем данные файла из тела запроса
	) {
		return await this.filesService.createFile(
			entityType,
			+entityId, // Преобразуем строку в число
			fileData
		)
	}

	@Patch(':id')
	async update(
		@Param('id') id: string,
		@Body() updateDto: UpdateFileDto
	): Promise<FileResponse> {
		return await this.filesService.updateFile(+id, updateDto)
	}

	@Delete(':id')
	@HttpCode(200)
	async delete(@Param('id') id: string) {
		return await this.filesService.deleteImage(+id)
	}
}
