import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Render,
} from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LocalAuth } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuth)
  @Post('/login')
  async login(@Request() req: ExpressRequest) {
    return this.authService.login(req.user);
  }

  @Get('/login')
  @Render('fashi/login')
  getLogin() {
    return;
  }
}
