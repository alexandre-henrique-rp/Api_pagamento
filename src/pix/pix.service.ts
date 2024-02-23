import { Injectable } from '@nestjs/common';
import { CreatePixDto } from './dto/create-pix.dto';
import { UpdatePixDto } from './dto/update-pix.dto';
import { PrismaClient } from '@prisma/client';
import { Create_link_payment } from './dto/create_link_payment.dto';
const prisma = new PrismaClient();

@Injectable()
export class PixService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createPixDto: CreatePixDto) {
    return 'This action adds a new pix';
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

  /**
   * A description of the entire function.
   *
   * @param {number} id - description of parameter
   * @param {Create_link_payment} Create_link {Date_int, Status_pg} - create link
   * @return {Promise<any>} description of return value
   */
  async PixCreatLink(
    id: number,
    Create_link: Create_link_payment,
  ): Promise<any> {
    try {
      const BaseUrlPage = process.env.BASE_URL_PAGE;
      const cerate = await prisma.price_cert.create({
        data: {
          FcwebId: Number(id),
          Date_int: Create_link.Date_int,
          Status_pg: Create_link.Status_pg,
        },
      });
      console.log(cerate);
      const uudi = cerate.Uuid;
      const Url = `https://${BaseUrlPage}/${uudi}`;

      const Update = await prisma.price_cert.update({
        where: {
          Uuid: uudi,
        },
        data: {
          UrlPg: Url,
        },
      });

      return Update;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
