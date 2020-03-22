import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthenticatedGuard } from '../common/guards/authentiated.guard';

@Controller('users')
export class UsersController {
  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  @Get('list')
  getHello() {
    return 'Hello users';
  }
}
