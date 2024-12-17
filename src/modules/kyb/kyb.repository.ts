import { Kyb, BusinessDetails, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export class KybRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async createKyb(data: Prisma.KybCreateInput): Promise<Kyb> {
    return this.prismaService.kyb.create({ data });
  }

  async createBusinessDetials(
    data: Prisma.BusinessDetailsCreateInput,
  ): Promise<BusinessDetails> {
    return this.prismaService.businessDetails.create({ data });
  }

  async updateKybByUserId(userId: string, data: Prisma.KybUpdateInput) {
    return this.prismaService.kyb.update({
      where: { userId },
      data,
    });
  }

  async updateBusinessDetailsByUserId(
    userId: string,
    data: Prisma.BusinessDetailsUpdateInput,
  ) {
    return this.prismaService.businessDetails.update({
      where: { userId },
      data,
    });
  }
}
