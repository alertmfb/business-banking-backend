import { Test, TestingModule } from '@nestjs/testing';
import { KybService } from './kyb.service';

describe('KybService', () => {
  let service: KybService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KybService],
    }).compile();

    service = module.get<KybService>(KybService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
