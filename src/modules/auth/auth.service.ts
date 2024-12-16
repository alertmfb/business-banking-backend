import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../user/user.service';
// import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InitiateSignUpDto } from './dto/initiate-signup.dto';
import { ErrorMessages } from 'src/shared/enums/error.message.enum';
import { MessagingService } from '../messaging/messaging-service.interface';
import { RequestResetDto } from './dto/request-reset.dto';
import { SetPasscodeDto } from './dto/set-passcode.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name, { timestamp: true });

  constructor(
    @Inject('MessagingProvider')
    private readonly messagingService: MessagingService,
    private readonly usersService: UsersService,
    // private jwtService: JwtService,
  ) {}

  async signInInitiate(payload: any): Promise<any> {
    try {
      const { phoneNumber } = payload;
      // get user by phone number or account number
      // if user exist, send OTP
      const otp = Math.floor(1000 + Math.random() * 9000); // call termii API to send OTP
      return { phoneNumber, otp };
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async verifySignInOtp(payload: any): Promise<any> {
    try {
      const { phoneNumber, otp } = payload;
      console.log('phoneNumber', phoneNumber);
      console.log('otp', otp);
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async signInWithPasscode(payload: any): Promise<any> {
    try {
      const { phoneNumber, otp } = payload;
      console.log('phoneNumber', phoneNumber);
      console.log('otp', otp);
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async initiateSignUp(payload: InitiateSignUpDto): Promise<any> {
    try {
      const { phoneNumber } = payload;
      const phoneExist = false; // call bankOne API to check if phone number exist
      if (phoneExist) {
        throw new HttpException(
          ErrorMessages.PHONE_EXIST,
          HttpStatus.BAD_REQUEST,
        );
      }
      // call messaging servide to send OTP
      return await this.messagingService.sendSmsToken({
        pin_attempts: 3,
        pin_time_to_live: 10,
        pin_length: 6,
        message_text: 'Your pin is < 1234 >',
        to: phoneNumber,
      });
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async verifyOtp(payload: any): Promise<any> {
    try {
      const { phoneNumber, otp } = payload;
      console.log('phoneNumber', phoneNumber);
      console.log('otp', otp);
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async setPasscode(payload: any): Promise<any> {
    try {
      return await this.usersService.setPasscode(payload.id, payload);
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async setPin(payload: any): Promise<any> {
    try {
      return await this.usersService.setPin(payload.id, payload);
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const passwordHash = user.password;
    const isMatch = await bcrypt.compare(pass, passwordHash);
    if (user && isMatch) {
      const { password, ...result } = user;
      console.log('password', password);
      return result;
    }
    return null;
  }

  async signInWithPassword(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const passwordHash = user.password;

    const isMatch = await bcrypt.compare(password, passwordHash);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    // const payload = { sub: user.id, email: user.email, name: user.name };

    return {
      // access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(): Promise<any> {
    return await this.usersService.create();
  }

  async completeSignUp(): Promise<any> {
    // phone number is verified
    // set passcode is true
    // set pin is true
    //set status to complete
    return 'complete';
  }

  async requestReset(payload: RequestResetDto): Promise<any> {
    try {
      console.log(payload);
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async resetPasscode(payload: SetPasscodeDto): Promise<any> {
    try {
      console.log(payload);
      // return await this.usersService.create();
    } catch (e) {
      this.logger.error(e.message);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
