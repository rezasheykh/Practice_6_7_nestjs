import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
export enum TranslateFieldsEnum {
  Banner = 'Banner',
}
const fa = {
  [TranslateFieldsEnum.Banner]: 'دیوار,ویترین املاک شما',
};
const en = {
  [TranslateFieldsEnum.Banner]: 'Divar, your realstate showCase',
};

@Injectable({
  scope: Scope.REQUEST,
})
export class TranslateService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  translate(field: TranslateFieldsEnum) {
    const language = this.request.headers['accept-language'];
    switch (language) {
      case 'fa':
        return fa[field];
      case 'en':
        return en[field];
    }
  }

  //   translate(field: TranslateFieldsEnum, language: string) {
  //     switch (language) {
  //       case 'fa':
  //         return fa[field];
  //       case 'en':
  //         return en[field];
  //     }
  //   }
}
