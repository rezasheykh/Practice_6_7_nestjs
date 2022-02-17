"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app/app.module");
const wrapper_response_interceptor_1 = require("./common/interceptors/wrapper-response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new wrapper_response_interceptor_1.WrapperResponseInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    await app.listen(3000, () => {
        console.log('Start listening on http://localhost:3000');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map