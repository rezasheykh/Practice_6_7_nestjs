import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // Headers,
} from '@nestjs/common';
import { TextfieldsService } from './textfields.service';
import { CreateTextfieldDto } from './dto/create-textfield.dto';
import { UpdateTextfieldDto } from './dto/update-textfield.dto';
import {
  TranslateService,
  TranslateFieldsEnum,
} from 'src/translate/translate.service';

@Controller('textfields')
export class TextfieldsController {
  constructor(
    private readonly textfieldsService: TextfieldsService,
    private readonly translateService: TranslateService,
  ) {}

  @Post()
  create(@Body() createTextfieldDto: CreateTextfieldDto) {
    return this.textfieldsService.create(createTextfieldDto);
  }
  @Get('/:field')
  getField(@Param('field') field: TranslateFieldsEnum) {
    return this.translateService.translate(field);
  }

  // @Get('/:field')
  // getField(
  //   @Param('field') field: TranslateFieldsEnum
  //   ) // @Headers('accept-language') language,)
  // ) {
  //   // return this.translateService.translate(field, language);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textfieldsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTextfieldDto: UpdateTextfieldDto,
  ) {
    return this.textfieldsService.update(+id, updateTextfieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textfieldsService.remove(+id);
  }
}
