import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { CategoryEntity } from './entities/category.entity';
import { PaginationDto } from './dto/pagination.dto';
import { EventEntity, EventTypes } from 'src/event/entities/event.entity';
import { RefTypeEnum } from 'src/enums/ref-type.enum';
import { EventService } from 'src/event/event.service';
import { CURRENCY_SIGN } from '../currency/constants/token.constant';
import { LoggerService } from 'src/logger/logger.service';
import { ConfigType } from '@nestjs/config';
import postConfig from './config/post.config';
// import { ConfigService } from 'src/config/config.service';
@Injectable()
export class PostService {
  constructor(
    @Inject('MAIL_API')
    private readonly mailApi: string,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
    private readonly connection: Connection,
    private readonly eventService: EventService,
    @Inject(CURRENCY_SIGN)
    private readonly currencySign: string,
    private readonly loggerService: LoggerService,
    @Inject(postConfig.KEY)
    private readonly postconfig: ConfigType<typeof postConfig>,
  ) {
    this.loggerService.setPrefix('PostService');
    this.loggerService.log(`constructor mail api is${mailApi}`);
    this.loggerService.log(`CurrencySign is${this.currencySign}`);
    // this.loggerService.log(
    //   `SHOW_MOBIL_NAMBER : ${this.cofigService.get<string>(
    //     'SHOW_MOBIL_NAMBER',
    //   )}`,
    this.loggerService.log(
      `SHOW_MOBIL_NAMBER : ${this.postconfig.ShowMobileNumber}`,
    );
  }

  findAll(pagination?: PaginationDto) {
    this.loggerService.log('PostService findAll Called');
    return this.postRepository.find({
      relations: ['categories'],
      skip: pagination?.page * pagination?.pagecount,
      take: pagination?.pagecount,
    });
  }

  async findOne(id: number) {
    return await this.postRepository.findOne(id, {
      relations: ['categories'],
    });
  }
  async preloadCategory(_item: string) {
    const category = await this.categoryRepository.findOne({
      where: {
        name: _item,
      },
    });
    if (category) {
      return category;
    } else {
      return this.categoryRepository.create({ name: _item });
    }
  }
  async create(body: CreatePostDto) {
    const categories = await Promise.all(
      body.categories.map((_item) => {
        return this.preloadCategory(_item);
      }),
    );
    const post = this.postRepository.create({
      ...body,
      categories,
    });
    return this.postRepository.save(post);
  }

  async update(id: number, body: UpdatePostDto) {
    const categories = await Promise.all(
      body.categories.map((_item) => {
        return this.preloadCategory(_item);
      }),
    );
    const post = await this.postRepository.preload({
      id: id,
      ...body,
      categories,
    });
    if (!post) {
      throw new NotFoundException(`post with id :${id} not found`);
    }
    // const post = await this.findOne(id);
    // if (post) {
    //   if (body.title) {
    //     post.title = body.title;
    //   }
    //   if (body.content) {
    //     post.content = body.content;
    //   }
    //   if (body.location) {
    //     post.location = body.location;
    //   }
    //   if (body.categories) {
    //     post.categories = body.categories;
    //   }
    // } else {
    //   throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    // }
    return this.postRepository.save(post);
  }

  async delete(id: number) {
    const post = await this.findOne(id);
    this.postRepository.remove(post);
    return post;
  }
  //   const index = this.posts.findIndex((x) => x.id === id);
  //   const post = this.posts[index];
  //   if (index >= 0) {
  //     this.posts.splice(index, 1);
  //   }

  // return post;
  // }
  async event(id: number, type: EventTypes, userId: number) {
    const queryRunner = this.connection.createQueryRunner();
    let post = await this.findOne(id);
    const events = await this.eventService.getEventByUser(
      post.id,
      RefTypeEnum.post,
      userId,
      EventTypes.Liked,
    );
    if (events.length > 0) {
      const errException = `This user already liked this post `;
      return new BadRequestException(errException);
    }
    if (type == EventTypes.Liked) {
      post.likeCount++;
    }
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      post = await queryRunner.manager.save(post);
      const event = this.eventRepository.create({
        masseage: type,
        refId: post.id,
        refType: RefTypeEnum.post,
      });
      // throw new Error('error');
      await queryRunner.manager.save(event);
      await queryRunner.commitTransaction();
      return post;
    } catch (e) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
    return post;
  }
}
