import { Injectable } from '@nestjs/common';
import { User } from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './user.repository';
import { SetPasscodeDto } from '../auth/dto/set-passcode.dto';
import { SetPinDto } from '../auth/dto/set-pin.dto';

@Injectable()
export class UsersService {
  private SALT = 10;
  constructor(
    private prisma: PrismaService,
    private readonly userRepository: UserRepository,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });
  }

  async create() {
    return await this.prisma.user.create({
      data: {
        name: 'foo',
        email: 'foobar',
        password: await bcrypt.hash('123456', this.SALT),
        passcode: null,
        pin: null,
      },
      select: {
        id: true,
      },
    });
  }

  async phoneExist(phone: string) {
    return await this.userRepository.findOne({ email: phone });
  }

  async setPasscode(id: string, payload: SetPasscodeDto) {
    return { id, ...payload };
  }

  async setPin(id: string, payload: SetPinDto) {
    return { id, ...payload };
  }
}
