import { DataSource } from 'typeorm';
import { User } from './src/entities/user';
import { join } from 'path';

const bannerOrmConfig = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'microservice_banner',
  entities: [User],
  migrations: [join(__dirname, './migrations/*{.ts,.js}')],
  synchronize: false,
});

export default bannerOrmConfig;
