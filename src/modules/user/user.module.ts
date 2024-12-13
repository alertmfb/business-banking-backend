import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [],
  providers: [UsersService, PrismaService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
