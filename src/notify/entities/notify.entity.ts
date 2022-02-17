import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notify')
export class Notify {
  @PrimaryGeneratedColumn()
  id: number;
}
