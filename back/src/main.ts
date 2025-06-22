import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Устанавливаем глобальный префикс
	app.setGlobalPrefix('api')

	// Включаем CORS
	app.enableCors()

	// Настройка Swagger документации
	const config = new DocumentBuilder()
		.setTitle('API Documentation') // Название вашего API
		.setDescription('The API description') // Описание
		.setVersion('1.0') // Версия API
		.addBearerAuth() // Если используете JWT аутентификацию
		.build()

	const document = SwaggerModule.createDocument(app, config)

	// Путь к документации будет /api/docs
	SwaggerModule.setup('docs', app, document, {
		customSiteTitle: 'API Docs'
	})

	await app.listen(process.env.PORT ?? 3000)

	console.log(`Application is running on: ${await app.getUrl()}`)
	console.log(`Swagger docs available at: ${await app.getUrl()}/api/docs`)
}
bootstrap()
