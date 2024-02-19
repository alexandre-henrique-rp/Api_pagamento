import { Injectable } from '@nestjs/common';
import EfiPay from 'sdk-typescript-apis-efi';
import options from './credentials_sandbox';

@Injectable()
export class EfiService {
  pix() {
    return 'pix';
  }

  pixReturn() {
    return 'pixReturn';
  }

  pixCancel() {
    return 'pixCancel';
  }

  pixConfirm() {
    return 'pixConfirm';
  }

  QrCodeGenerate(id: string) {
    try {
      const PixQrCode = new EfiPay(options);
      return PixQrCode.pixQrCodeGenerate(id);
    } catch (error) {
      return error;
    }
  }
}
