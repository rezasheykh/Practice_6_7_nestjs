"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTextfieldDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_textfield_dto_1 = require("./create-textfield.dto");
class UpdateTextfieldDto extends (0, mapped_types_1.PartialType)(create_textfield_dto_1.CreateTextfieldDto) {
}
exports.UpdateTextfieldDto = UpdateTextfieldDto;
//# sourceMappingURL=update-textfield.dto.js.map