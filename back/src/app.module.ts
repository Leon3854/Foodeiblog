import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma.module'
import { PrismaService } from './prisma.service'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AboutModule } from './about/about.module';
import { ContactsModule } from './contacts/contacts.module';
import { AddmessageModule } from './addmessage/addmessage.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		}),
		ConfigModule.forRoot({
			envFilePath: '.env'
		}),
		PrismaModule,
		UserModule,
		AuthModule,
		AboutModule,
		ContactsModule,
		AddmessageModule
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
