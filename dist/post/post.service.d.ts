import { BadRequestException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { CategoryEntity } from './entities/category.entity';
import { PaginationDto } from './dto/pagination.dto';
import { EventEntity, EventTypes } from 'src/event/entities/event.entity';
import { EventService } from 'src/event/event.service';
import { LoggerService } from 'src/logger/logger.service';
import { ConfigType } from '@nestjs/config';
import postConfig from './config/post.config';
export declare class PostService {
    private readonly mailApi;
    private readonly postRepository;
    private readonly categoryRepository;
    private readonly eventRepository;
    private readonly connection;
    private readonly eventService;
    private readonly currencySign;
    private readonly loggerService;
    private readonly postconfig;
    constructor(mailApi: string, postRepository: Repository<PostEntity>, categoryRepository: Repository<CategoryEntity>, eventRepository: Repository<EventEntity>, connection: Connection, eventService: EventService, currencySign: string, loggerService: LoggerService, postconfig: ConfigType<typeof postConfig>);
    findAll(pagination?: PaginationDto): Promise<PostEntity[]>;
    findOne(id: number): Promise<PostEntity>;
    preloadCategory(_item: string): Promise<CategoryEntity>;
    create(body: CreatePostDto): Promise<PostEntity>;
    update(id: number, body: UpdatePostDto): Promise<PostEntity>;
    delete(id: number): Promise<PostEntity>;
    event(id: number, type: EventTypes, userId: number): Promise<PostEntity | BadRequestException>;
}
