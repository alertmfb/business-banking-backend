import { Module, DynamicModule } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KybService } from './kyb.service';
import { KybController } from './kyb.controller'; // Import KybController
import { DojahService } from './providers/dojah.service';
import { NestjsFormDataModule, MemoryStoredFile } from 'nestjs-form-data';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
  ],
  controllers: [KybController],
  providers: [
    KybService,
    {
      provide: 'KybProvider',
      useFactory: (httpService: HttpService, configService: ConfigService) => {
        const providerName =
          configService.get<string>('KYB_PROVIDER') || 'dojah';
        switch (providerName) {
          case 'dojah':
            return new DojahService(httpService, configService);
          default:
            throw new Error(`Unsupported provider: ${providerName}`);
        }
      },
      inject: [HttpService, ConfigService],
    },
  ],
  exports: [KybService],
})
export class KybModule {
  static register(): DynamicModule {
    return {
      module: KybModule,
    };
  }
}
