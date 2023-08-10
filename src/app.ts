import 'dotenv/config';

import { APP_ENV } from '@/configs/constants';

export const app = () => {
  // eslint-disable-next-line no-console
  console.log(`node-tstarter-${APP_ENV}`);
};

app();
