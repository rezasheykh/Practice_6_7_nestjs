import { Repository } from 'typeorm';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { ConfigEntity } from './entities/config.entity';
export declare class ConfigService {
    private readonly configRepository;
    constructor(configRepository: Repository<ConfigEntity>);
    getCurrencyValue(): Promise<ConfigEntity>;
    create(createConfigDto: CreateConfigDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConfigDto: UpdateConfigDto): string;
    remove(id: number): string;
}
