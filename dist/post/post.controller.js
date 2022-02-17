"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const app_key_guard_1 = require("../common/guards/app-key.guard");
const is_public_decoraytor_1 = require("../common/guards/constant/is-public.decoraytor");
const event_entity_1 = require("../event/entities/event.entity");
const pagination_dto_1 = require("./dto/pagination.dto");
const create_post_dto_1 = require("./dtos/create-post.dto");
const update_post_dto_1 = require("./dtos/update-post.dto");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    findAll() {
        return this.postService.findAll();
    }
    findAllPaginated(query) {
        return this.postService.findAll(query);
    }
    async findOne(id) {
        return this.postService.findOne(parseInt(id));
    }
    insert(body) {
        return this.postService.create(body);
    }
    update(id, body) {
        return this.postService.update(+id, body);
    }
    patch(id, body) {
        console.log(body instanceof update_post_dto_1.UpdatePostDto);
        return this.postService.update(id, body);
    }
    like(id, userId, type) {
        return this.postService.event(+id, type, userId);
    }
    delete(id) {
        return this.postService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(app_key_guard_1.AppKeyGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/paginate'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findAllPaginated", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.SetMetadata)(is_public_decoraytor_1.IS_PUBLIC, true),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "insert", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "patch", null);
__decorate([
    (0, common_1.Patch)(':id/event/:type/:userId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "like", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "delete", null);
PostController = __decorate([
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map