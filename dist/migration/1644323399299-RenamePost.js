"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenamePost1644323399299 = void 0;
class RenamePost1644323399299 {
    async up(queryRunner) {
        await queryRunner.renameColumn('post', 'title', 'name');
    }
    async down(queryRunner) {
        await queryRunner.renameColumn('post', 'name', 'title');
    }
}
exports.RenamePost1644323399299 = RenamePost1644323399299;
//# sourceMappingURL=1644323399299-RenamePost.js.map