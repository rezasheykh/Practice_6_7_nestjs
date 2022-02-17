// import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
// import { AppModule } from 'src/common/1/app.module';
import { WrapperResponseInterceptor } from './common/interceptors/wrapper-response.interceptor';
// import { error } from 'console';
// import { catchError, delay, EMPTY, from, map, Observable, Subscriber, tap, throwError, timeout } from 'rxjs';
// import { AppModule } from './app.module';
// import { WrapperResponseInterceptor } from './common/interceptors/wrapper-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new WrapperResponseInterceptor());
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //     transformOptions: {
  //       enableImplicitConversion: true,
  //     },
  //   }),
  // );
  
  await app.listen(3000, () => {
    console.log('Start listening on http://localhost:3000');
  });
}
// async function testRXJS() {
// const observable = new Observable((subscriber) => {
// setTimeout(() => {
// subscriber.next(2);
//   subscriber.next(3);
// subscriber.next(1);
//   subscriber.complete();
//   // subscriber.error(error);
// }, 5000);
//   let i=0;
//   while (i <= 10) {
//     subscriber.next(i);
//     i++;
//   }
//   subscriber.complete();
// });
//create observable whit creation operator
// // const observable =
// from([1, 2, 3])
//   .pipe(
//     map((item) => item + 1),

//     tap((item) => {
//       console.log(item);
//     }),
//     delay(2000),
//     map((item) => item + 1),
//     timeout(1000),
// catchError((err) => {
//   console.log(`Inside pipe`, err);
//   return throwError(() => new Error(err));
// return EMPTY;
// }),
//     )
//     .subscribe({
//       // observable.subscribe({
//       next: (value) => {
//         console.log(` next called${value}`);
//       },
//       complete: () => {
//         console.log(`completed`);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
// }
bootstrap();
// testRXJS();
