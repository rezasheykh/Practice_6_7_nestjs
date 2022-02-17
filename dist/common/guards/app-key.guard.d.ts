import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AppKeyService } from 'src/app-key/app-key.service';
import { Reflector } from '@nestjs/core';
export declare class AppKeyGuard implements CanActivate {
    private readonly appKeyService;
    private readonly reflectore;
    constructor(appKeyService: AppKeyService, reflectore: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
