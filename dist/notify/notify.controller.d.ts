import { NotifyService } from './notify.service';
import { UpdateNotifyDto } from './dto/update-notify.dto';
export declare class NotifyController {
    private readonly notifyService;
    constructor(notifyService: NotifyService);
    create(price: any, category: any): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNotifyDto: UpdateNotifyDto): string;
    remove(id: string): string;
}
