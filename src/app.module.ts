import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { ResponseLocalsMiddleware } from './common/middlewares/response-locals.middleware';
import { ProductModule } from './product/product.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (confiService: ConfigService) =>
        confiService.get('typeormConfiguration'),
      inject: [ConfigService],
    }),
    UsersModule,
    PhotosModule,
    AuthModule,
    ProductModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ResponseLocalsMiddleware).forRoutes('*');
  }
}
