import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	HttpCode
} from '@nestjs/common'
import { AddmessageService } from './addmessage.service'
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger'
import { ResponseAddMessageDto } from './dto/response-addmessage.dto'
import { CreateAddMessageDto } from './dto/create-addmessage.dto'

@Controller('addmessages')
export class AddmessageController {
	constructor(private readonly addMessageService: AddmessageService) {}

	@Get()
	async getAll() {
		return await this.addMessageService.getAll()
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get message for by ID' })
	@ApiParam({ name: 'id', type: Number, description: 'The message entry Id' })
	@ApiResponse({
		status: 200,
		description: 'The message exist',
		type: ResponseAddMessageDto
	})
	@ApiResponse({
		status: 404,
		description: 'The message entry not found'
	})
	async getById(@Param('id') id: string): Promise<ResponseAddMessageDto> {
		return await this.addMessageService.getMessageById(+id)
	}

	@Post()
	@ApiOperation({ summary: 'Create the message' })
	@ApiBody({ type: CreateAddMessageDto })
	@ApiResponse({
		status: 201,
		type: ResponseAddMessageDto,
		description: 'Successfully created'
	})
	async create(
		@Body() dto: CreateAddMessageDto
	): Promise<ResponseAddMessageDto> {
		return await this.addMessageService.createMessage(dto)
	}

	@Delete(':id')
	@HttpCode(200)
	async deleteById(@Param('id') id: string): Promise<{ id: number }> {
		return await this.addMessageService.delete(+id)
	}
}
