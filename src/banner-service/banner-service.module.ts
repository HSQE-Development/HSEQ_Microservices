import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './src/controllers/users.controller';
import { UsersService } from './src/services/users.service';
import { User } from './src/entities/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class BannerServiceModule {}
