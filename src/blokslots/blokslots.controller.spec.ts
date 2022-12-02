import { Test, TestingModule } from '@nestjs/testing';
import { BlokslotsController } from './blokslots.controller';
import { BlokslotsService } from './blokslots.service';

describe('BlokslotsController', () => {
  let controller: BlokslotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlokslotsController],
      providers: [BlokslotsService],
    }).compile();

    controller = module.get<BlokslotsController>(BlokslotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
