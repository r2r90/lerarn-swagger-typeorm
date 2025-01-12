import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
  autoloadEntities: process.env.DATABASE_AUTOOLOAD === 'true' ? true : false,
}));
