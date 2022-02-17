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
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const configFields_enum_1 = require("../enums/configFields.enum");
const typeorm_2 = require("typeorm");
const config_entity_1 = require("./entities/config.entity");
let ConfigService = class ConfigService {
    constructor(configRepository) {
        this.configRepository = configRepository;
    }
    getCurrencyValue() {
        return this.configRepository.findOne({
            where: {
                key: configFields_enum_1.ConfigFields.Currency,
            },
        });
    }
    create(createConfigDto) {
        return 'This action adds a new config';
    }
    findAll() {
        return `This action returns all config`;
    }
    findOne(id) {
        return `This action returns a #${id} config`;
    }
    update(id, updateConfigDto) {
        return `This action updates a #${id} config`;
    }
    remove(id) {
        return `This action removes a #${id} config`;
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(config_entity_1.ConfigEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map