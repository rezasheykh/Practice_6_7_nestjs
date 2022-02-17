import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import {
  catchError,
  Observable,
  tap,
  throwError,
  timeout,
  TimeoutError,
} from 'rxjs';
import interseptorConfig from './config/interseptor.config';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor( 
    // @Inject(interseptorConfig.KEY)
  // private readonly intConfig:ConfigType<typeof interseptorConfig>,
    private readonly configService:ConfigService,
    ){}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`start Timeout Intercptor`);
    return next.handle().pipe(
      timeout(this.configService.get<number>('TIMEOUT')),
      // timeout(this.intConfig.timeout),
      tap((res) => {
        console.log(`response is${res}`);
      }),
      timeout(3000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => new Error(err));
      }),
    );
  }
}
