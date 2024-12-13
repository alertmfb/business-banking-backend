import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { HasMimeType, IsFile, MemoryStoredFile } from 'nestjs-form-data';

export class BusinessDocumentDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'CAC Document for the business',
  })
  @IsNotEmpty()
  @IsFile()
  @HasMimeType(['application/pdf'])
  cac: MemoryStoredFile;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Memorandum of the business',
  })
  @IsNotEmpty()
  @HasMimeType(['application/pdf'])
  memorandum: MemoryStoredFile;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'SCUML Document for the business',
  })
  @IsNotEmpty()
  @HasMimeType(['application/pdf'])
  scuml: MemoryStoredFile;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Utility Bill for the business',
  })
  @IsNotEmpty()
  @HasMimeType(['application/pdf'])
  utilityBill: MemoryStoredFile;
}
