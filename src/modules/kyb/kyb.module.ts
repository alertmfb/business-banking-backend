import { Module, DynamicModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { KybService } from './kyb.service';
import { KybController } from './kyb.controller'; // Import KybController
import { NestjsFormDataModule, MemoryStoredFile } from 'nestjs-form-data';
import { KybRepository } from './kyb.repository';
import { KybServiceProvider } from './providers';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
  ],
  controllers: [KybController],
  providers: [KybService, KybRepository, KybServiceProvider],
  exports: [KybService],
})
export class KybModule {
  static register(): DynamicModule {
    return {
      module: KybModule,
    };
  }
}
