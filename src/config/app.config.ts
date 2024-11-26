import { INestApplication } from '@nestjs/common';

export const appConfig = (app: INestApplication<any>) => {
  app.setGlobalPrefix('/api/v1');
};
