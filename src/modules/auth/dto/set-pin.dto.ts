import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SetPinDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(4, { message: 'Transaction must be exactly 4 digits long' })
  @MinLength(4, { message: 'Transaction must be exactly 4 digits long' })
  @ApiProperty({ required: true, example: 1234 })
  pin: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @MaxLength(4, { message: 'Transaction must be exactly 4 digits long' })
  @MinLength(4, { message: 'Transaction must be exactly 4 digits long' })
  @ApiProperty({ required: true, example: 1234 })
  confirmPin: number;
}
