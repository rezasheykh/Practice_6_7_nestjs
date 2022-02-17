import { CreateTextfieldDto } from './dto/create-textfield.dto';
import { UpdateTextfieldDto } from './dto/update-textfield.dto';
export declare class TextfieldsService {
    create(createTextfieldDto: CreateTextfieldDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTextfieldDto: UpdateTextfieldDto): string;
    remove(id: number): string;
}
