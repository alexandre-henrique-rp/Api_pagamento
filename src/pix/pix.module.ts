import { Module } from '@nestjs/common';
import { PixService } from './pix.service';
import { PixController } from './pix.controller';
import { PixPaymentService } from 'src/integration/efi/pix_payment/pix_payment.service';

@Module({
  imports: [PixPaymentService],
  controllers: [PixController],
  providers: [PixService],
})
export class PixModule {}
