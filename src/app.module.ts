import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { KybModule } from './modules/kyb/kyb.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), PrismaModule, KybModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
