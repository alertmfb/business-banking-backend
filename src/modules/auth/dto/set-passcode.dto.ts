import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SetPasscodeDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(6, { message: 'Passcode must be exactly 6 digits long' })
  @MinLength(6, { message: 'Passcode must be exactly 6 digits long' })
  @ApiProperty({ required: true, example: 123456 })
  pin: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(6, { message: 'Confirm Passcode must be exactly 4 digits long' })
  @MinLength(6, { message: 'Confirm Passcode must be exactly 4 digits long' })
  @ApiProperty({ required: true, example: 123456 })
  confirmPin: number;
}
