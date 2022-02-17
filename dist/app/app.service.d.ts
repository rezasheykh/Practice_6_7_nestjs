import { ConfigType } from '@nestjs/config';
import { LoggerService } from 'src/logger/logger.service';
import appConfig from './config/app.config';
export declare class AppService {
    private readonly app;
    private readonly loggerService;
    constructor(app: ConfigType<typeof appConfig>, loggerService: LoggerService);
    getHello(): string;
}
