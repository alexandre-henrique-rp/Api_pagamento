import { Injectable } from '@nestjs/common';
import EfiPay from 'sdk-typescript-apis-efi';
import { Credential } from '../athenticateCredentials/options';

@Injectable()
export class PixPaymentService {
  async QrCode(ID: string) {
    try {
      const params = { id: ID };
      const QrCodeRetor = new EfiPay(Credential.OptionCredential);
      return QrCodeRetor.pixGenerateQRCode(params);
    } catch (error) {
      return error;
    }
  }
}
