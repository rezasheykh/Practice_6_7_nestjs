import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
  getCurrencySign(currency: string, full: boolean) {
    let sign = '';
    switch (currency) {
      case 'euro':
        sign = '€';
        break;
      case 'dollar':
        sign = '$';
        break;
      case 'rial':
        sign = 'ریال';
        break;
      default:
        sign = 'x';
    }
    return full ? `${sign} ${currency}` : sign;
  }
}
