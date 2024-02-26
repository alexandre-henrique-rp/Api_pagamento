import { Injectable } from '@nestjs/common';
import { CreatePixDto } from './dto/create-pix.dto';
import { UpdatePixDto } from './dto/update-pix.dto';
import { PrismaClient } from '@prisma/client';
import { PixPaymentService } from 'src/integration/efi/pix_payment/pix_payment.service';

const prisma = new PrismaClient();

@Injectable()
export class PixService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(uuid: string, createPixDto: CreatePixDto) {
    try {
      const getInfosPg = await prisma.price_cert.findUnique({
        where: {
          Uuid: uuid,
        },
      });

      const id = getInfosPg.FcwebId;

      const getInfosCliente = await prisma.fcweb.findUnique({
        where: {
          id: id,
        },
      });

      const pixCreator: any = PixPaymentService.PixCreateEfi(getInfosCliente);

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
    } catch (error) {}
  }

  findAll() {
    return `This action returns all pix`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pix`;
  }

  findOne2(Uuid: string) {
    console.log(Uuid);
    return `This action returns a #${Uuid} pix`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updatePixDto: UpdatePixDto) {
    return `This action updates a #${id} pix`;
  }

  remove(id: number) {
    return `This action removes a #${id} pix`;
  }
}
