import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PixPaymentService } from 'src/integration/efi/pix_payment/pix_payment.service';

const prisma = new PrismaClient();

@Injectable()
export class PixService {
  constructor(private readonly pixPaymentService: PixPaymentService) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(uuid: string) {
    try {
      const getInfosPg = await prisma.price_cert.findUnique({
        where: {
          Uuid: uuid,
        },
      });

      const id = getInfosPg.FcwebId;
      console.log(id);

      if (getInfosPg.Status_pg !== 'Em Aberto') {
        throw new Error('Pagamento ja realizado');
      }

      const getInfosCliente: any = await prisma.fcweb.findUnique({
        where: {
          id: id,
        },
      });

      const pixCreator: any =
        await this.pixPaymentService.PixCreateEfi(getInfosCliente);

      console.log(pixCreator);

      const update = await prisma.price_cert.update({
        where: {
          Uuid: uuid,
        },
        data: {
          TxidPix: pixCreator.txid,
          QrLink: pixCreator.location,
          CreatePixDate: pixCreator.calendario.criacao,
          PixStatus: pixCreator.status,
          PixCopiaECola: pixCreator.pixCopiaECola,
        },
      });

      console.log(update);
      return update;
    } catch (error) {
      throw new Error('Erro ao criar Pix: ' + error.message);
    }
  }
}
