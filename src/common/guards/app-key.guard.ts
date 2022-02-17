import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {Request} from 'express'
import { AppKeyService } from 'src/app-key/app-key.service';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC } from './constant/is-public.decoraytor';
@Injectable()
export class AppKeyGuard implements CanActivate {
  constructor(
    private readonly appKeyService:AppKeyService,
    private readonly reflectore:Reflector
  ){}
 async canActivate(
    context: ExecutionContext,
  ):Promise<boolean> {
   const ispublic= this.reflectore.get(IS_PUBLIC,context.getHandler())
   if(ispublic){
     return true;
   }
    // this.reflectore.get(isPublic,)
    // const req=context.switchToHttp();
    // const request=req.getRequest<Request>()
    const request=context.switchToHttp().getRequest<Request>();
    let appKey;
    if(request.headers['x-app-key']){
      appKey=request.headers['x-app-key']
    }else{
      throw new BadRequestException('Header must have x-app-key')
    }
    const entity = await this.appKeyService.findOne(appKey);
    if(!entity){
      return false;
    }
      return true;
    
  }
}
