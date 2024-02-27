import { Injectable } from '@nestjs/common';
import EfiPay from 'sdk-typescript-apis-efi';

import Txid from './gerador_txis';
import { Pix_GenerateDto } from './pix_generate.dto';

@Injectable()
export class PixPaymentService {
  constructor(private readonly CredentialService: any) {}
  /**
   *
   * @param ID - id do cliente
   * @returns {any}
   */
  async QrCode(ID: string): Promise<any> {
    try {
      const params = { id: ID };
      const option = this.CredentialService.OptionCredential();
      const QrCodeRetor = new EfiPay(option);
      return QrCodeRetor.pixGenerateQRCode(params);
    } catch (error) {
      return error;
    }
  }

  /**
   *
   * @param getInfosPg - id do cliente - nome - cpf - valor
   * @returns {Pix_GenerateDto} - {calendario, txid, revisao, loc, location, status, valor, devedor, valor, chave, solicitacaoPagador, pixCopiaECola}
   */
  async PixCreateEfi(getInfosCliente: any): Promise<Pix_GenerateDto> {
    try {
      const body = {
        calendario: {
          expiracao: 3600,
        },
        devedor: {
          cpf: getInfosCliente.cpf,
          nome: getInfosCliente.nome,
        },
        valor: {
          original: getInfosCliente.valorcd.replace(',', '.'),
        },
        chave: process.env.CHAVE_PIX, // Informe sua chave Pix cadastrada na gerencianet
      };

      const params = {
        txid: Txid(),
      };
      const option = this.CredentialService.OptionCredential();
      const PixCreator = new EfiPay(option);
      return PixCreator.pixCreateCharge(params, body);
    } catch (error) {
      return error;
    }
  }
}
