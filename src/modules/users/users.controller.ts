import { Controller } from '@nestjs/common';
import { ApiVersions } from 'src/common/enums/versions.enum';

@Controller({
  path: 'users',
  version: ApiVersions.ONE,
})
export class UsersController {}
