import {
	Controller,
	Get,
	Body,
	Param,
	Delete,
	Put,
	HttpCode,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserDto } from './dto/user.dto'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	// @Auth()
	async getProfile(@CurrentUser('id') id: number) {
		return this.userService.byId(id)
	}

	@Put('profile')
	@Auth()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async getNewTokens(@CurrentUser('id') id: number, @Body() dto: UserDto) {
		return this.userService.updateProfile(id, dto)
	}

	@Delete(':id')
	@HttpCode(200)
	@Auth()
	async delete(@Param('id') id: string) {
		return this.userService.delete(id)
	}
}
