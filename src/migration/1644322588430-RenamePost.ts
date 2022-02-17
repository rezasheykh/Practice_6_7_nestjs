import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenamePost1644322588430 implements MigrationInterface {
  name = 'RenamePost1644322588430';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `EXEC sp_rename "nestDB_prod.dbo.post.name", "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `EXEC sp_rename "nestDB_prod.dbo.post.title", "name"`,
    );
  }
}
