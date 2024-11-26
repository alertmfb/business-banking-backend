import { Controller, Get, Version } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiVersions } from 'src/common/enums/versions.enum';

@Controller({
  path: 'auth',
  version: ApiVersions.ONE,
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @Version(ApiVersions.ONE)
  async getAuth() {
    return await this.authService.getAuth();
  }
}
