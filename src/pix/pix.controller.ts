import {
  Controller,
  Get,
  Post,
  // Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { PixService } from './pix.service';
import { UpdatePixDto } from './dto/update-pix.dto';

@Controller('pix')
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Post('create/payment/:Uuid')
  create(@Param('Uuid') Uuid: string) {
    console.log(Uuid);
    return this.pixService.create(Uuid);
  }

  // @Get()
  // findAll() {
  //   return this.pixService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.pixService.findOne(+id);
  // }

  // @Get('payment/:Uuid')
  // findOne2(@Param('Uuid') Uuid: string) {
  //   return this.pixService.findOne2(Uuid);
  // }

  // @Get()
  // findQuery() {
  //   return this.pixService.findAll();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePixDto: UpdatePixDto) {
  //   return this.pixService.update(+id, updatePixDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pixService.remove(+id);
  // }
}
