import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useGlobalConfig } from './config/app.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
// import * as multipart from '@fastify/multipart';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('/api/v1');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The Alert Business API description')
    .setVersion('1.0')
    .addTag('alert-business')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  useGlobalConfig(app);
  // app.register(multipart);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
