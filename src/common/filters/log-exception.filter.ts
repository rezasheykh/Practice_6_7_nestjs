import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { string } from 'joi';
import { ExceptionLogService } from 'src/logger/exception-log/exception-log.service';
import { Response } from 'express';

@Catch(HttpException)
export class LogExceptionFilter implements ExceptionFilter {
  constructor(private exceptionLogService:ExceptionLogService){}
  async catch(exception:HttpException, host: ArgumentsHost) {
    // console.log(exception);
   const context = host.switchToHttp();
  //  console.log(context);
   const response= context.getResponse<Response>();
  //  console.log(response);
   const error=exception.getResponse();
  //  console.log(error);
  
   let myResponse;
   if(typeof error ==='string'){
     myResponse={message:error}
   } else{
     myResponse=error as object;
   }

   const log= await this.exceptionLogService.insertLog(
     exception.getStatus(),
     myResponse.message,
     );
     response.status(exception.getStatus()).json({
       ...myResponse,
       logId:log.id,
     })
   
   
  }
}

 