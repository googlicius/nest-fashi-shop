import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('fashi/index')
  getHello() {
    return {
      message: 'Nestjs',
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

  @Get('/fashi/check-out')
  @Render('fashi/checkout')
  getCheckout() {
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
