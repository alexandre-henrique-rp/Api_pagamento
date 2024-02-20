import { Injectable } from '@nestjs/common';
import { CreatePixDto } from './dto/create-pix.dto';
import { UpdatePixDto } from './dto/update-pix.dto';

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

  PixCreatLink(id: number) {
    try {
      return `Link use id = ${id}`;
    } catch (error) {
      return error;
    }
  }
}
