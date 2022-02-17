"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsMoneyPipe = void 0;
const common_1 = require("@nestjs/common");
let ParsMoneyPipe = class ParsMoneyPipe {
    transform(value, metadata) {
        const currencySigns = ['$', '^', 'ریال'];
        let isSignAccepted = false;
        for (let i = 0; i < currencySigns.length; i++) {
            isSignAccepted = value.endsWith(currencySigns[i]);
            console.log('isSignAccepted: ', isSignAccepted);
            if (isSignAccepted)
                break;
        }
        if (!isSignAccepted) {
            throw new common_1.BadRequestException(`Your currency does not end with an acceptable sign`);
        }
        currencySigns.forEach((item) => {
            value = value.replace(item, '');
        });
        value = value.replace(/,/g, '');
        console.log('after foreach sign', value);
        return parseInt(value);
    }
};
ParsMoneyPipe = __decorate([
    (0, common_1.Injectable)()
], ParsMoneyPipe);
exports.ParsMoneyPipe = ParsMoneyPipe;
//# sourceMappingURL=pars-money.pipe.js.map