import { registerAs } from '@nestjs/config';

export default registerAs('root', () => ({
  database: {
    host: process.env.HOST,
    port: +process.env.PORT,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
})) ;

// export default () => {
//   return {
//databas: {
//     host: process.env.HOST,
//     port: +process.env.PORT,
//     username: process.env.USER_NAME,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//}
//   };
// };
