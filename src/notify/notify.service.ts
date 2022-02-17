import { Injectable } from '@nestjs/common';

@Injectable()
export class NotifyService {
  create() {
    return 'This action adds a new notify';
  }

  findAll() {
    return `This action returns all notify`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notify`;
  }

  update(id: number) {
    return `This action updates a #${id} notify`;
  }

  remove(id: number) {
    return `This action removes a #${id} notify`;
  }
}
