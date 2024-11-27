import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { User } from './dto/users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private SALT = 10;
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<User | undefined> {
    return await this.prisma.users.findUnique({
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
    return await this.prisma.users.create({
      data: {
        name: 'foo',
        email: 'foobar',
        password: await bcrypt.hash('123456', this.SALT),
      },
      select: {
        id: true,
      },
    });
  }
}
