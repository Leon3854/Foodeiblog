import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	constructor() {
		super({
			log: ['query', 'info', 'warn', 'error'] //Это часть объекта,
			// передаваемого в super(). Здесь log — это ключ, который,
			// вероятно, используется для настройки логирования в
			// родительском классе. Значение — это массив строк, который
			// указывает, какие уровни логирования должны быть активированы
			// (в данном случае: query, info, warn, error). Таким образом,
			// данный код инициализирует новый экземпляр класса, передавая
			// параметры для настройки логирования в родительский класс.
			// Это может быть полезно, если вы хотите контролировать,
			// какие сообщения будут записываться в лог в процессе
			// работы приложения.
		})
	}

	async onModuleInit() {
		await this.$connect()
	}

	async onModuleDestroy() {
		await this.$disconnect()
	}
}
