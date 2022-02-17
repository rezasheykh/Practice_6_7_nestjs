// import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class PaginationDto {
  // request convert to number
  // @Type(() => Number)
  @IsOptional()
  page: number;

  // @Type(() => Number)
  @IsOptional()
  pagecount: number;
  count: any;
}
