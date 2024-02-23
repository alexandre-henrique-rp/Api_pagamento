import { Test, TestingModule } from '@nestjs/testing';
import { PixPaymentService } from './pix_payment.service';

describe('PixPaymentService', () => {
  let service: PixPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PixPaymentService],
    }).compile();

    service = module.get<PixPaymentService>(PixPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
