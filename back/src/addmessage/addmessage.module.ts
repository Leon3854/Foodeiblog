import { Module } from '@nestjs/common'
import { AddmessageService } from './addmessage.service'
import { AddmessageController } from './addmessage.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [AddmessageController],
	providers: [AddmessageService, PrismaService],
	exports: [AddmessageService]
})
export class AddmessageModule {}
