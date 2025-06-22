import { applyDecorators, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../guards/jwt.guard'
import { OnlyAdminGuard } from '../guards/admin.guards'
import { TypeRole } from '../types/auth.interface'

export const Auth = (role: TypeRole = 'user') =>
	applyDecorators(
		role === 'admin'
			? UseGuards(JwtAuthGuard, OnlyAdminGuard)
			: UseGuards(JwtAuthGuard)
	)
