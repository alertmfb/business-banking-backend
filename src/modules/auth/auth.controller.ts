import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { InitiateSignUpDto } from './dto/initiate-signup.dto';
import { SuccessResponseDto } from 'src/shared/dtos/success-response.dto';
import { SuccessMessage } from '../../shared/enums/success-message.enum';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { SetPasscodeDto } from './dto/set-passcode.dto';
import { SetPinDto } from './dto/set-pin.dto';
import { ApiTags } from '@nestjs/swagger';
import { InitiateSignInDto } from './dto/initiate-signin.dto';

@ApiTags('Auth Service')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signInInitiate(@Body() payload: InitiateSignInDto) {
    try {
      const response = await this.authService.signInInitiate(payload);
      return new SuccessResponseDto(SuccessMessage.SIGNIN_INITIATED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('signin/verify-passcode')
  async signInWithPasscode(@Body() payload: any) {
    try {
      const response = await this.authService.signInWithPasscode(payload);
      return new SuccessResponseDto(SuccessMessage.PHONE_VERIFIED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('signup/initiate')
  async signUp(@Body() payload: InitiateSignUpDto) {
    try {
      const response = await this.authService.initiateSignUp(payload);
      return new SuccessResponseDto(SuccessMessage.SIGNUP_INITIATED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('signup/set-passcode')
  async setPasscode(@Body() payload: SetPasscodeDto) {
    try {
      const response = await this.authService.setPasscode(payload);
      return new SuccessResponseDto(SuccessMessage.PASSCODE_SET, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('signup/set-pin')
  async setPin(@Body() payload: SetPinDto) {
    try {
      const response = await this.authService.setPin(payload);
      return new SuccessResponseDto(SuccessMessage.PIN_SET, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('signup/verify-otp')
  async verifyOtp(@Body() payload: VerifyOtpDto) {
    try {
      const response = await this.authService.verifyOtp(payload);
      return new SuccessResponseDto(SuccessMessage.PHONE_VERIFIED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('signup/complete')
  async completeSignUp() {
    try {
      const response = await this.authService.completeSignUp();
      return new SuccessResponseDto(SuccessMessage.SIGNUP_COMPLETED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('passcode/reset/request')
  async requestReset(@Body() payload: VerifyOtpDto) {
    try {
      const response = await this.authService.completeSignUp();
      return new SuccessResponseDto(SuccessMessage.SIGNUP_COMPLETED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('passcode/reset')
  async reset() {
    try {
      const response = await this.authService.completeSignUp();
      return new SuccessResponseDto(SuccessMessage.SIGNUP_COMPLETED, response);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
