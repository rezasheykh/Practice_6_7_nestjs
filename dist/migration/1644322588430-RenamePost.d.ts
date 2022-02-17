import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class RenamePost1644322588430 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
