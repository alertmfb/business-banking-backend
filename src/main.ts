import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appConfig(app);
  await app.listen(3000);
}
bootstrap();
