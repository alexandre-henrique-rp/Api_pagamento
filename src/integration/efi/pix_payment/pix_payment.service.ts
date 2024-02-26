import { Injectable } from '@nestjs/common';
import EfiPay from 'sdk-typescript-apis-efi';
import { Credential } from '../athenticateCredentials/options';
import Txid from './gerador_txis';
import { Pix_GenerateDto } from './pix_generate.dto';

@Injectable()
export class PixPaymentService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static PixCreateEfi(getInfosCliente: {
    id: number;
    s_alerta: string;
    referencia: string;
    id_boleto: string;
    id_cancelar_bol_rem: string;
    unidade: string;
    responsavel: string;
    criou_fc: string;
    andamento: string;
    prioridade: string;
    solicitacao: string;
    venda: string;
    cpf: string;
    cnpj: string;
    nome: string;
    razaosocial: string;
    vectoboleto: Date;
    unico: string;
    contador: string;
    obscont: string;
    comissaoparceiro: number;
    scp: string;
    tipocd: string;
    valorcd: string;
    custocd: string;
    custoCdpar: string;
    estatos_pgto: string;
    pgto_efi: string;
    formapgto: string;
    vouchersoluti: string;
    ct_parcela: string;
    telefone: string;
    telefone2: string;
    email: string;
    dtnascimento: string;
    rg: string;
    cei: string;
    endereco: string;
    nrua: string;
    bairro: string;
    complemento: string;
    cep: string;
    uf: string;
    im: number;
    cidade: string;
    observacao: string;
    vctoCD: Date;
    historico: string;
    arquivo: string;
    nomearquivo: string;
    obsrenovacao: string;
    dt_aprovacao: Date;
    comicao: number;
    validacao: string;
    nfe: string;
    urlnota: string;
    id_fcw_soluti: string;
    dt_agenda: Date;
    hr_agenda: Date;
    obs_agenda: string;
    reg_cnh: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    throw new Error('Method not implemented.');
  }
  async QrCode(ID: string) {
    try {
      const params = { id: ID };
      const QrCodeRetor = new EfiPay(Credential.OptionCredential);
      return QrCodeRetor.pixGenerateQRCode(params);
    } catch (error) {
      return error;
    }
  }

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
      const PixCreator = new EfiPay(Credential.OptionCredential);
      return PixCreator.pixCreateCharge(params, body);
    } catch (error) {
      return error;
    }
  }
}
