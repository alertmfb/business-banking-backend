import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BusinessAddressDto {
  @ApiProperty({
    description: 'Street address of the business',
    example: '123 Business St',
  })
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'City of the business',
    example: 'Lagos',
  })
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'State of the business',
    example: 'Lagos',
  })
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description: 'Zipcode of the business location',
    example: '100001',
  })
  @IsNotEmpty()
  zipcode: string;

  @ApiProperty({
    description: 'Landmark near the business',
    example: 'Opposite Main Market',
  })
  @IsNotEmpty()
  landmark: string;

  @ApiProperty({
    description: 'Local Government Area (LGA) of the business',
    example: 'Kosofe',
  })
  @IsNotEmpty()
  lga: string;
}
