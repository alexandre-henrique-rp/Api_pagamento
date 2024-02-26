import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaClient } from '@prisma/client';
import { Create_link_payment } from './dto/create_link_payment.dto';
const prisma = new PrismaClient();

@Injectable()
export class ClientService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  findAll() {
    return `This action returns all client`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  /**
   * Async function to update price certificate with client access status.
   *
   * @param {string} uuid - The UUID of the price certificate.
   * @return {string} The message indicating the registration of the activity with the updated UUID.
   */
  async linkAcess(uuid: string): Promise<string> {
    try {
      const update = await prisma.price_cert.update({
        where: {
          Uuid: uuid,
        },
        data: {
          Cliente_acess: true,
        },
      });

      return `atividade registada do id ${update.Uuid}`;
    } catch (error) {
      return error;
    }
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
