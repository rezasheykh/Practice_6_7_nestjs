import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { LoggerService } from 'src/logger/logger.service';
import appConfig from './config/app.config';

@Injectable()
export class AppService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly app: ConfigType<typeof appConfig>,
    private readonly loggerService: LoggerService,
  ) {
    this.loggerService.setPrefix('AppServise');
    // this.loggerService.log(
    //   `database host:${this.configService.get<string>('database.host')}`,
    // );
    // console.log('database host:', configService.get<string>('database.host'));
    this.loggerService.setPrefix('AppServise')
    this.loggerService.log(`database host:${this.app.database.host}`);
    console.log('database host:', app.database.host);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
