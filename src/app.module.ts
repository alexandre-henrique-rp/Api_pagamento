import { Module } from '@nestjs/common';
import { PixModule } from './pix/pix.module';
import { PixPaymentModule } from './integration/efi/pix_payment/pix_payment.module';
import { CreditoPaymentModule } from './integration/efi/credito_payment/credito_payment.module';
import { BoletoPaymentModule } from './integration/efi/boleto_payment/boleto_payment.module';

@Module({
  imports: [
    PixModule,
    PixPaymentModule,
    CreditoPaymentModule,
    BoletoPaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
