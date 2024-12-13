import { Test, TestingModule } from '@nestjs/testing';
import { KybController } from './kyb.controller';
import { KybService } from './kyb.service';

describe('KybController', () => {
  let controller: KybController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KybController],
      providers: [KybService],
    }).compile();

    controller = module.get<KybController>(KybController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
