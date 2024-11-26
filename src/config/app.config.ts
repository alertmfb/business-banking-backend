import { INestApplication, VersioningType } from '@nestjs/common';

export const useGlobalConfig = (app: INestApplication<any>) => {
  app.setGlobalPrefix('/api');

  app.enableVersioning({
    type: VersioningType.URI,
  });
};
