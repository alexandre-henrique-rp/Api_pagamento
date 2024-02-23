import { Test, TestingModule } from '@nestjs/testing';
import { CreditoPaymentService } from './credito_payment.service';

describe('CreditoPaymentService', () => {
  let service: CreditoPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditoPaymentService],
    }).compile();

    service = module.get<CreditoPaymentService>(CreditoPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
