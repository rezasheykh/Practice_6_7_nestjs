import { PartialType } from '@nestjs/mapped-types';
import { CreateTextfieldDto } from './create-textfield.dto';

export class UpdateTextfieldDto extends PartialType(CreateTextfieldDto) {}
