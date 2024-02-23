import { Module } from '@nestjs/common';
import { CreditoPaymentService } from './credito_payment.service';

@Module({
  providers: [CreditoPaymentService]
})
export class CreditoPaymentModule {}
