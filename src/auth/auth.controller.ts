import {
  Controller,
  Post,
  UseGuards,
  Get,
  Render,
  Res,
  Req,
  UseFilters,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuth } from 'src/common/guards/local-auth.guard';
import { AuthExceptionFilter } from '../common/filters/auth-exceptions.filter';

@Controller('auth')
@UseFilters(AuthExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuth)
  @Post('/login')
  async login(@Res() res: Response) {
    res.redirect('/');
  }

  @Get('/login')
  @Render('auth/login')
  getLogin(@Req() req: Request) {
    return {
      message: req.flash('loginError'),
    };
  }
}
