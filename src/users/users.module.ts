import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  exports: [
    TypeOrmModule
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
