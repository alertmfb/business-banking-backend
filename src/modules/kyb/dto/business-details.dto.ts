import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessDetailsDto {
  @ApiProperty({
    description: 'Logo of the business in base64 format',
    example: '/9j/4AAQScXJSgBBAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLD...',
  })
  @IsString()
  @IsNotEmpty()
  logo: string;

  @ApiProperty({
    description: 'Name of the business',
    example: 'Deji Enterprises',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Registration number of the business',
    example: 'RC1234567',
  })
  @IsString()
  @IsNotEmpty()
  rcNumber: string;

  @ApiProperty({
    description: 'Industry in which the business operates',
    example: 'Technology',
  })
  @IsString()
  @IsNotEmpty()
  industry: string;

  @ApiProperty({
    description: 'Size of the business (e.g., Small, Medium, Large)',
    example: 'Small',
  })
  @IsString()
  @IsNotEmpty()
  size: string;

  @ApiProperty({
    description: 'Annual income of the business in local currency',
    example: '5000000',
  })
  @IsString()
  @IsNotEmpty()
  annualIncome: string;

  @ApiProperty({
    description: 'First name of the director',
    example: 'Deji',
  })
  @IsString()
  @IsNotEmpty()
  directorFirstName: string;

  @ApiProperty({
    description: 'Last name of the director',
    example: 'Bolaji',
  })
  @IsString()
  @IsNotEmpty()
  directorLastName: string;

  @ApiProperty({
    description: 'Identification number of the director',
    example: 'A123456789',
  })
  @IsString()
  @IsNotEmpty()
  directorIdNo: string;

  @ApiProperty({
    description: 'Type of identification document for the director (e.g., Passport, National ID)',
    example: 'Passport',
  })
  @IsString()
  @IsNotEmpty()
  directorId: string;
}
