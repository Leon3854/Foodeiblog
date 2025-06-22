import { Module } from '@nestjs/common'
import { FilesController } from './files.controller'
import { PrismaService } from 'src/prisma.service'
import { FilesService } from './files.service'

@Module({
	exports: [FilesService],
	providers: [PrismaService, FilesService],
	controllers: [FilesController]
})
export class FilesModule {}
