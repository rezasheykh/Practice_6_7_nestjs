import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TimeoutInterceptor } from 'src/common/interceptors/timeout.interceptor';
import { NotifyModule } from 'src/notify/notify.module';
import { UserModule } from 'src/user/user.module';
import { EventModule } from 'src/event/event.module';
import { UtilityModule } from 'src/utility/utility.module';
import { TranslateModule } from 'src/translate/translate.module';
import { TextfieldsModule } from 'src/textfields/textfields.module';
import { LoggerService } from 'src/logger/logger.service';
import { CurrencyModule } from 'src/currency/currency.module';
import { PostModule } from 'src/post/post.module';
import appConfig from './config/app.config';
import * as Joi from 'joi';
import { LogExceptionFilter } from 'src/common/filters/log-exception.filter';
import { LoggerModule } from 'src/logger/logger.module';
import { AppKeyGuard } from 'src/common/guards/app-key.guard';
import { AppKeyModule } from 'src/app-key/app-key.module';
@Module({
  imports: [
    PostModule,
    NotifyModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(appConfig)],
      useFactory: (app: ConfigType<typeof appConfig>) => ({
        type: 'mssql',
        ...app.database,
        extra: {
          trustServerCertificate: true,
        },
        synchronize: true,
        autoLoadEntities: true,
        // logging: true,
        // validationSchema: joi.object({
        //   TimeoutInterceptor: join.number(),
        // }),
      }),
      inject: [appConfig.KEY],
    }),
    ConfigModule.forRoot({
      load: [appConfig],
      // envFilePath: '.enviroment',
      // ignoreEnvFile: true,
      validationSchema: Joi.object({
        HOST: Joi.string().required(),
        PORT: Joi.number().required(),
        USER_NAME: Joi.string().default('user1'),
        VALIDATION_WHITE_LIST: Joi.boolean(),
        FORBID_NON_WHITELISTED: Joi.boolean(),
        TRANSFORM: Joi.boolean(),
        TIMEOUT: Joi.number(),
      }),
    }),
    NotifyModule,
    UserModule,
    EventModule,
    UtilityModule,
    CurrencyModule,
    TranslateModule,
    TextfieldsModule,
    PostModule,
    LoggerModule,
    AppKeyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
    {
      provide:APP_FILTER,
      useClass:LogExceptionFilter,
    },
    {
      provide:APP_GUARD,
      useClass:AppKeyGuard,
    },
    // {
    //   provide: APP_PIPE,
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => {
    //     return new ValidationPipe({
    //       whitelist: configService.get<boolean>('VALIDATION_WHITE_LIST'),
    //       forbidNonWhitelisted: configService.get<boolean>(
    //         'FORBID_NON_WHITELISTED',
    //       ),
    //       transform: configService.get<boolean>('TRANSFORM'),
    //     })

    //   },
    // },

    LoggerService,
  ],
})
export class AppModule {}
