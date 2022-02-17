import { registerAs } from '@nestjs/config';

export default registerAs('post', () => {
  return {
    currency: process.env.CURRENCY,
    ShowMobileNumber: process.env.SHOW_MOBIL_NAMBER,
  };
});