import { Module } from '@nestjs/common';
import { PixPaymentService } from './pix_payment.service';
import EfiPay from 'sdk-typescript-apis-efi';
import { CredentialService } from '../credential/credential.service';

@Module({
  imports: [EfiPay],
  providers: [CredentialService, PixPaymentService],
})
export class PixPaymentModule {}
