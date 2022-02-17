import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class WrapperResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Start interceptor');
    return next.handle().pipe(
      map((data) => {
        console.log(`After return interseptor`);
        // console.log(res);
        return { data };
      }),
    );
  }
}
