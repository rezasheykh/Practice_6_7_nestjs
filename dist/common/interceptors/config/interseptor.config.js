"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('interseptor', () => {
    return {
        timeout: process.env.TIMEOUT,
    };
});
//# sourceMappingURL=interseptor.config.js.map