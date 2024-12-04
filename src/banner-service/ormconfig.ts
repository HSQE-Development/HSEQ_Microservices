import { DataSource } from 'typeorm';
import { User } from './src/entities/user';
import { join } from 'path';

const bannerOrmConfig = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: [join(__dirname, './migrations/*{.ts,.js}')],
  synchronize: false,
});

export default bannerOrmConfig;
