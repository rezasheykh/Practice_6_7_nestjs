import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ConfigModule } from 'src/config/config.module';
// import { ConfigService } from 'src/config/config.service';
import { CURRENCY_SIGN } from './constants/token.constant';
import { CurrencyService } from './currency.service';

@Module({})
export class CurrencyModule {
  static forRoot(full: boolean): DynamicModule {
    return {
      imports: [ConfigModule],
      module: CurrencyModule,
      providers: [
        CurrencyService,
        {
          provide: CURRENCY_SIGN,
          useFactory: async (
            currencyService: CurrencyService,
            // ConfigService: ConfigService,
          ) => {
            // const config = await ConfigService.getCurrencyValue();
            // return currencyService.getCurrencySign(config.value, full);
            return currencyService.getCurrencySign(process.env.CURRENCY, full);
          },
          // inject: [CurrencyService, ConfigService],
          inject: [CurrencyService],
        },
      ],
      exports: [CURRENCY_SIGN],
    };
  }
}
