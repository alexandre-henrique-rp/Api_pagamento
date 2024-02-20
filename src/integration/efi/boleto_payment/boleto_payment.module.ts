import { Module } from '@nestjs/common';
import { BoletoPaymentService } from './boleto_payment.service';

@Module({
  providers: [BoletoPaymentService]
})
export class BoletoPaymentModule {}
