import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async search(@Query('q') q: string) {
    const results = await this.usersService.searchUsers(q || '', 20);
    return { success: true, data: results };
  }
}
