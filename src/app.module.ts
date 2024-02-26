import { Module } from '@nestjs/common';
import { PixModule } from './pix/pix.module';
import { PixPaymentModule } from './integration/efi/pix_payment/pix_payment.module';
import { CreditoPaymentModule } from './integration/efi/credito_payment/credito_payment.module';
import { BoletoPaymentModule } from './integration/efi/boleto_payment/boleto_payment.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    PixModule,
    PixPaymentModule,
    CreditoPaymentModule,
    BoletoPaymentModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
