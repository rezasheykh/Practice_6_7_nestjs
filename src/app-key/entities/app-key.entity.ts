import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('appkey')
export class AppKeyEntity {
    @PrimaryColumn()
    key:string;

    @Column() 
    name:string;
}
