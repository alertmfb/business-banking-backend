import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { KybService } from './kyb.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { SuccessResponseDto } from 'src/shared/dtos/success-response.dto';
import { SuccessMessage } from 'src/shared/enums/success-message.enum';
import { ResidentialAddressDto } from './dto/residential-address.dto';
import { NationalityDto } from './dto/nationality.dto';
import { TinDto } from './dto/tin.dto';
import { BvnDto } from './dto/bvn.dto';
import { NinDto } from './dto/nin.dto';
import { FaceVerifyDto } from './dto/face.dto';
import { BusinessDetailsDto } from './dto/business-details.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { BusinessDocumentDto } from './dto/business-document.dto';
import { BusinessAddressDto } from './dto/business-address.dto';

@ApiTags('Know your Business')
@Controller('kyb')
export class KybController {
  constructor(private readonly kybService: KybService) {}

  @Post('nationality')
  @ApiBody({ type: NationalityDto })
  async setNationality(@Body() payload: NationalityDto) {
    try {
      const response = await this.kybService.setNationality(payload);
      return new SuccessResponseDto(SuccessMessage.SET_NATIONALITY, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-tin')
  @ApiBody({ type: TinDto })
  async verifyTin(@Body() payload: TinDto) {
    try {
      const response = await this.kybService.verifyTin(payload);
      return new SuccessResponseDto(SuccessMessage.SET_TIN, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-bvn')
  @ApiBody({ type: BvnDto })
  async verifyBvn(@Body() payload: BvnDto) {
    try {
      const response = await this.kybService.verifyBvn(payload);
      return new SuccessResponseDto(SuccessMessage.SET_BVN, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-nin')
  @ApiBody({ type: NinDto })
  async verifyNin(@Body() payload: NinDto) {
    try {
      const response = await this.kybService.verifyBvn(payload);
      return new SuccessResponseDto(SuccessMessage.SET_NIN, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-face')
  @ApiBody({ type: FaceVerifyDto })
  async faceVerify(@Body() payload: FaceVerifyDto) {
    try {
      const response = await this.kybService.faceVerify(payload);
      return new SuccessResponseDto(SuccessMessage.FACE_VERIFIED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-residential-address')
  @ApiBody({ type: ResidentialAddressDto })
  async residentialAddress(@Body() payload: ResidentialAddressDto) {
    try {
      const response = await this.kybService.residentialAddress(payload);
      return new SuccessResponseDto(
        SuccessMessage.RESIDENTIAL_ADDRESS_SAVED,
        response,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-business-details')
  @ApiBody({ type: BusinessDetailsDto })
  async businessDetiails(@Body() payload: BusinessDetailsDto) {
    try {
      const response = await this.kybService.businessDetiails(payload);
      return new SuccessResponseDto(
        SuccessMessage.BUSINESS_DETAILS_SAVED,
        response,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-business-documents')
  @FormDataRequest()
  @ApiBody({ type: BusinessDocumentDto })
  async businessDocument(@Body() payload: BusinessDocumentDto) {
    try {
      const response = await this.kybService.businessDocument(payload);
      return new SuccessResponseDto(
        SuccessMessage.BUSINESS_DOCUMENT_UPLOADED,
        response,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('verify-business-address')
  @ApiBody({ type: BusinessAddressDto })
  async businessAddress(@Body() payload: BusinessAddressDto) {
    try {
      const response = await this.kybService.businessAddress(payload);
      return new SuccessResponseDto(
        SuccessMessage.BUSINESS_ADDRESS_VERIFIED,
        response,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('attestation')
  @ApiBody({ type: Boolean })
  async attestation(@Body() payload: { iAttest: boolean }) {
    try {
      const response = await this.kybService.attestation(payload);
      return new SuccessResponseDto(
        SuccessMessage.BUSINESS_VERIFY_COMPLETED,
        response,
      );
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
