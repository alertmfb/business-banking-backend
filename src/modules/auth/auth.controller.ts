import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get()
  async getAuth() {
    return 12345;
  }
}
