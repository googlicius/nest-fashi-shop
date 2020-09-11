import {
  Controller,
  Get,
  Render,
  UseGuards,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './common/guards/authentiated.guard';
import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';
import { User } from './common/decorators/user.decorator';
import { User as UserEntity } from './users/user.entity';
import { SentryInterceptor } from './interceptors/sentry.interceptor';

@Controller()
@UseInterceptors(SentryInterceptor)
@UseFilters(AuthExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('fashi/index')
  getHello() {
    return {
      message: 'Hello World!',
    };
  }

  @Get('fashi/shop')
  @Render('fashi/shop')
  getShop() {
    return {};
  }

  @Get('/fashi/blog')
  @Render('fashi/blog')
  getBlog() {
    return {};
  }

  @Get('/fashi/blog-details')
  @Render('fashi/blog-details')
  getBlogDetail() {
    return {};
  }

  @Get('/fashi/shopping-cart')
  @Render('fashi/shopping-cart')
  getShoppingCart() {
    return {};
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/fashi/check-out')
  @Render('fashi/checkout')
  getCheckout(@User() user: UserEntity) {
    console.log('email>>>', user.email);
    return {};
  }

  @Get('/fashi/faq')
  @Render('fashi/faq')
  getFaq() {
    return {};
  }

  @Get('/fashi/register')
  @Render('fashi/register')
  getRegister() {
    return {};
  }

  @Get('/fashi/login')
  @Render('fashi/login')
  getLogin() {
    return {};
  }

  @Get('/fashi/contact')
  @Render('fashi/contact')
  getContact() {
    return {};
  }
}
