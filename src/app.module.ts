import { Module } from '@nestjs/common';
import { PixModule } from './pix/pix.module';
import { PixPaymentModule } from './integration/efi/pix_payment/pix_payment.module';
import { CreditoPaymentModule } from './integration/efi/credito_payment/credito_payment.module';
import { BoletoPaymentModule } from './integration/efi/boleto_payment/boleto_payment.module';
import { ClientModule } from './client/client.module';
import { PixPaymentService } from './integration/efi/pix_payment/pix_payment.service';
import { PixService } from './pix/pix.service';
import { CredentialService } from './integration/efi/credential/credential.service';
import { CredentialModule } from './integration/efi/credential/credential.module';

@Module({
  imports: [
    PixModule,
    PixPaymentModule,
    CreditoPaymentModule,
    BoletoPaymentModule,
    ClientModule,
    CredentialModule,
  ],
  controllers: [],
  providers: [PixPaymentService, PixService, CredentialService],
})
export class AppModule {}
