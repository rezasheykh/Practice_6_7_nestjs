import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CurrencyModule } from 'src/currency/currency.module';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    CurrencyModule.forRoot(false),
    LoggerModule,
],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
