import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { useGlobalConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useGlobalConfig(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
