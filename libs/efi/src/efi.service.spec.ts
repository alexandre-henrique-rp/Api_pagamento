import { Test, TestingModule } from '@nestjs/testing';
import { EfiService } from './efi.service';

describe('EfiService', () => {
  let service: EfiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EfiService],
    }).compile();

    service = module.get<EfiService>(EfiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
