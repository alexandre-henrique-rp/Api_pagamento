import { Test, TestingModule } from '@nestjs/testing';
import { BoletoPaymentService } from './boleto_payment.service';

describe('BoletoPaymentService', () => {
  let service: BoletoPaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoletoPaymentService],
    }).compile();

    service = module.get<BoletoPaymentService>(BoletoPaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
