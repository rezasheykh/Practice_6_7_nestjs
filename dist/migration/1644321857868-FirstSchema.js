"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstSchema1644321857868 = void 0;
class FirstSchema1644321857868 {
    constructor() {
        this.name = 'FirstSchema1644321857868';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "event" ("id" int NOT NULL IDENTITY(1,1), "masseage" nvarchar(20) NOT NULL, "refType" nvarchar(255) NOT NULL, "refId" int NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notify" ("id" int NOT NULL IDENTITY(1,1), CONSTRAINT "PK_27732ed6dd5bf6aad9afed59ec7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "content" nvarchar(255) NOT NULL, "location" nvarchar(255) NOT NULL, "likeCount" int NOT NULL CONSTRAINT "DF_ba627db400b27272e68a297a030" DEFAULT 0, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "postCategoey" ("postId" int NOT NULL, "categoryId" int NOT NULL, CONSTRAINT "PK_7ead43972d2e2978119ff558c59" PRIMARY KEY ("postId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6692458f4abc90720353d11899" ON "postCategoey" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9d6889d8c2ae323a22ecd67be3" ON "postCategoey" ("categoryId") `);
        await queryRunner.query(`ALTER TABLE "postCategoey" ADD CONSTRAINT "FK_6692458f4abc90720353d118998" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "postCategoey" ADD CONSTRAINT "FK_9d6889d8c2ae323a22ecd67be3e" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "postCategoey" DROP CONSTRAINT "FK_9d6889d8c2ae323a22ecd67be3e"`);
        await queryRunner.query(`ALTER TABLE "postCategoey" DROP CONSTRAINT "FK_6692458f4abc90720353d118998"`);
        await queryRunner.query(`DROP INDEX "IDX_9d6889d8c2ae323a22ecd67be3" ON "postCategoey"`);
        await queryRunner.query(`DROP INDEX "IDX_6692458f4abc90720353d11899" ON "postCategoey"`);
        await queryRunner.query(`DROP TABLE "postCategoey"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "notify"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }
}
exports.FirstSchema1644321857868 = FirstSchema1644321857868;
//# sourceMappingURL=1644321857868-FirstSchema.js.map