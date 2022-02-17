import { TextfieldsService } from './textfields.service';
import { CreateTextfieldDto } from './dto/create-textfield.dto';
import { UpdateTextfieldDto } from './dto/update-textfield.dto';
import { TranslateService, TranslateFieldsEnum } from 'src/translate/translate.service';
export declare class TextfieldsController {
    private readonly textfieldsService;
    private readonly translateService;
    constructor(textfieldsService: TextfieldsService, translateService: TranslateService);
    create(createTextfieldDto: CreateTextfieldDto): string;
    getField(field: TranslateFieldsEnum): string;
    findOne(id: string): string;
    update(id: string, updateTextfieldDto: UpdateTextfieldDto): string;
    remove(id: string): string;
}
