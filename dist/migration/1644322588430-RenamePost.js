"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenamePost1644322588430 = void 0;
class RenamePost1644322588430 {
    constructor() {
        this.name = 'RenamePost1644322588430';
    }
    async up(queryRunner) {
        await queryRunner.query(`EXEC sp_rename "nestDB_prod.dbo.post.name", "title"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`EXEC sp_rename "nestDB_prod.dbo.post.title", "name"`);
    }
}
exports.RenamePost1644322588430 = RenamePost1644322588430;
//# sourceMappingURL=1644322588430-RenamePost.js.map