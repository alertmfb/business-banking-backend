import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The Alert Business API description')
    .setVersion('1.0')
    .addTag('alert-business')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  Logger.log(
    `Server running on http://localhost:${process.env.PORT ?? 3000}`,
    'Bootstrap',
  );
  Logger.log(
    `Swagger running on http://localhost:${process.env.PORT ?? 3000}/docs`,
    'Bootstrap',
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
