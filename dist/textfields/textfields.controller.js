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
exports.TextfieldsController = void 0;
const common_1 = require("@nestjs/common");
const textfields_service_1 = require("./textfields.service");
const create_textfield_dto_1 = require("./dto/create-textfield.dto");
const update_textfield_dto_1 = require("./dto/update-textfield.dto");
const translate_service_1 = require("../translate/translate.service");
let TextfieldsController = class TextfieldsController {
    constructor(textfieldsService, translateService) {
        this.textfieldsService = textfieldsService;
        this.translateService = translateService;
    }
    create(createTextfieldDto) {
        return this.textfieldsService.create(createTextfieldDto);
    }
    getField(field) {
        return this.translateService.translate(field);
    }
    findOne(id) {
        return this.textfieldsService.findOne(+id);
    }
    update(id, updateTextfieldDto) {
        return this.textfieldsService.update(+id, updateTextfieldDto);
    }
    remove(id) {
        return this.textfieldsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_textfield_dto_1.CreateTextfieldDto]),
    __metadata("design:returntype", void 0)
], TextfieldsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:field'),
    __param(0, (0, common_1.Param)('field')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TextfieldsController.prototype, "getField", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TextfieldsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_textfield_dto_1.UpdateTextfieldDto]),
    __metadata("design:returntype", void 0)
], TextfieldsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TextfieldsController.prototype, "remove", null);
TextfieldsController = __decorate([
    (0, common_1.Controller)('textfields'),
    __metadata("design:paramtypes", [textfields_service_1.TextfieldsService,
        translate_service_1.TranslateService])
], TextfieldsController);
exports.TextfieldsController = TextfieldsController;
//# sourceMappingURL=textfields.controller.js.map