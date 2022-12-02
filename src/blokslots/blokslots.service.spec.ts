import { Test, TestingModule } from '@nestjs/testing';
import { BlokslotsService } from './blokslots.service';

describe('BlokslotsService', () => {
  let service: BlokslotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlokslotsService],
    }).compile();

    service = module.get<BlokslotsService>(BlokslotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
