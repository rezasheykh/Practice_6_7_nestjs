import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppKeyModule } from 'src/app-key/app-key.module';
// import { ConfigModule } from 'src/config/config.module';
// import { ConfigService } from 'src/config/config.service';
import { CurrencyModule } from 'src/currency/currency.module';
// import { config } from 'process';
import { EventEntity } from 'src/event/entities/event.entity';
import { EventModule } from 'src/event/event.module';
import { LoggerModule } from 'src/logger/logger.module';
import { UtilityModule } from 'src/utility/utility.module';
import postConfig from './config/post.config';
// import { UtilityService } from 'src/utility/utility.service';
// import { CURRENCY_SIGN } from '../currency/constants/token.constant';
// import { EventService } from 'src/event/event.service';
import { CategoryEntity } from './entities/category.entity';
import { PostEntity } from './entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
// const config = 'euro';
@Module({
  imports: [
    ConfigModule.forFeature(postConfig),
    TypeOrmModule.forFeature([PostEntity, CategoryEntity, EventEntity]),
    CurrencyModule.forRoot(true),
    EventModule,
    UtilityModule,
    LoggerModule,
    AppKeyModule,
  ],
  controllers: [PostController],
  providers: [
    PostService,
    {
      provide: 'MAIL_API',
      useValue: 'Http://mail.google.com',
    },

    // PaginationDto,
  ],
})
export class PostModule {}
