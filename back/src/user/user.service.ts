import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { returnUserObject } from './return-user.object'
import { UserDto } from './dto/user.dto'
import { hash } from 'argon2'
import { User, Prisma } from '@prisma/client'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	// async findUser(args: Prisma.UserFindUniqueArgs): Promise<User> {
	// 	const user = await this.prisma.user.findUnique({
	// 		where: args.where, // предполагаем, что args содержит поле where
	// 		select: {
	// 			...returnUserObject
	// 		}
	// 	})

	// 	if (!user) {
	// 		throw new Error('User not found')
	// 	}

	// 	return user
	// }

	async byId(id: number): Promise<User> {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			},
			select: {
				...returnUserObject
			}
		})
		if (!user) {
			throw new Error('User not found')
		}
		return user
	}

	async updateProfile(id: number, dto: UserDto) {
		const isSameUser = await this.prisma.user.findUnique({
			where: { email: dto.email }
		})
		if (isSameUser && id !== isSameUser.id)
			throw new BadRequestException('Email already in use')

		const user = await this.byId(id)
		return this.prisma.user.update({
			where: { id },
			data: {
				email: dto.email,
				name: dto.name,
				avatarPath: dto.avatarPath,
				password: dto.password ? await hash(dto.password) : user.password
			}
		})
	}

	async delete(id: string) {
		return await this.prisma.user.delete({
			where: { id: +id }
		})
	}
}
