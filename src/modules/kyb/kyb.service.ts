import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ResidentialAddressDto } from './dto/residential-address.dto';
import { KybProvider } from './providers/kyb-provider.interface';
import { NationalityDto } from './dto/nationality.dto';
import { KybRepository } from './kyb.repository';

@Injectable()
export class KybService {
  constructor(
    @Inject('KybProvider') private readonly kybProvider: KybProvider,
    private readonly kybRepository: KybRepository,
  ) {}
  async setNationality(payload: NationalityDto) {
    try {
      return payload;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async verifyTin(payload: any) {
    console.log(payload);
  }
  async verifyBvn(payload: any) {
    console.log(payload);
  }
  async verifyNin(payload: any) {
    console.log(payload);
  }
  async faceVerify(payload: any) {
    console.log(payload);
  }
  async residentialAddress(payload: ResidentialAddressDto) {
    try {
      console.log(payload);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async businessDetiails(payload: any) {
    console.log(payload);
  }
  async businessDocument(payload: any) {
    console.log(payload);
  }
  async businessAddress(payload: any) {
    console.log(payload);
  }
  async attestation(payload: any) {
    console.log(payload);
  }
}
