import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async getAuth() {
    return 'foo';
  }
}
