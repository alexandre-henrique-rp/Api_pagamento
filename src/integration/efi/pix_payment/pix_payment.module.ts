import { Module } from '@nestjs/common';
import { PixPaymentService } from './pix_payment.service';
import { Credential } from '../athenticateCredentials/options';

@Module({
  imports: [Credential],
  providers: [PixPaymentService],
})
export class PixPaymentModule {}
