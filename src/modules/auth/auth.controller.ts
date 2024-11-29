import { Body, Controller, Get, Post, Version } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiVersions } from 'src/common/enums/versions.enum';
import { SignInWithPassword } from './dto/auth.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller({
  path: 'auth',
  version: ApiVersions.ONE,
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signin')
  @Version(ApiVersions.ONE)
  async signInWithPassword(@Body() payload: SignInWithPassword) {
    return await this.authService.signInWithPassword(
      payload.email,
      payload.password,
    );
  }

  @Get('signup')
  @Version(ApiVersions.ONE)
  async signUp() {
    return await this.authService.signUp();
  }

  @Public()
  @Post('test')
  test() {
    return { foo: 'foo' };
  }
}
