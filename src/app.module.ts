import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import bannerOrmConfig from './banner-service/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerServiceModule } from './banner-service/banner-service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(bannerOrmConfig.options),
    BannerServiceModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
