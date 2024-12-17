import { HttpException, HttpStatus } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { StorageService } from '../storage-service.interface';

export class S3Storage implements StorageService {
  private readonly s3: S3;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_REGION'),
    });
  }

  async uploadFile(file: any): Promise<string> {
    try {
      const params = {
        Bucket: this.configService.get<string>('AWS_BUCKET_NAME'),
        Key: `${Date.now()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read',
      };
      const result = await this.s3.upload(params).promise();
      return result.Location;
    } catch (e) {
      throw new HttpException(
        'S3 upload failed: ' + e.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteFile(fileUrl: string): Promise<void> {
    try {
      const bucketName = this.configService.get<string>('AWS_BUCKET_NAME');
      const fileName = fileUrl.split('/').pop();
      await this.s3
        .deleteObject({ Bucket: bucketName, Key: fileName! })
        .promise();
    } catch (e) {
      throw new HttpException(
        'S3 delete failed: ' + e.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
