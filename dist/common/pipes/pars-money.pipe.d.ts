import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParsMoneyPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): number;
}
