"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    database: {
        host: process.env.HOST,
        port: +process.env.PORT,
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    },
});
//# sourceMappingURL=app.config.js.map