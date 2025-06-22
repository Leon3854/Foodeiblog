import {
	createParamDecorator,
	ExecutionContext,
	UnauthorizedException
} from '@nestjs/common'
import { User } from '@prisma/client'

export const CurrentUser = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user
		// console.log('Request user:', user) // Логируем пользователя
		if (!user) {
			throw new UnauthorizedException('User  not found')
		}
		return data ? user[data] : user
	}
)
