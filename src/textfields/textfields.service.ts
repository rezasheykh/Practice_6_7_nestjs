import { Injectable } from '@nestjs/common';
import { CreateTextfieldDto } from './dto/create-textfield.dto';
import { UpdateTextfieldDto } from './dto/update-textfield.dto';

@Injectable()
export class TextfieldsService {
  create(createTextfieldDto: CreateTextfieldDto) {
    return 'This action adds a new textfield';
  }

  findAll() {
    return `This action returns all textfields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textfield`;
  }

  update(id: number, updateTextfieldDto: UpdateTextfieldDto) {
    return `This action updates a #${id} textfield`;
  }

  remove(id: number) {
    return `This action removes a #${id} textfield`;
  }
}
