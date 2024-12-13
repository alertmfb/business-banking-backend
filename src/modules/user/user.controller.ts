import { Controller } from '@nestjs/common';
import { ApiVersions } from 'src/shared/enums/versions.enum';

@Controller({
  path: 'users',
  version: ApiVersions.ONE,
})
export class UsersController {}
