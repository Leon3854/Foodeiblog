import { Module } from '@nestjs/common'
import { ContactsService } from './contacts.service'
import { ContactsController } from './contacts.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [ContactsController],
	providers: [ContactsService, PrismaService],
	exports: [ContactsService]
})
export class ContactsModule {}
