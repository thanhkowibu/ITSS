import { Controller, Post, Body, UseGuards, Req, Logger } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import * as authenticatedRequestInterface from '../common/interface/authenticated-request.interface';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';

@UseGuards(JwtAuthGuard)
@Controller('api/groups')
export class GroupsController {
  private readonly logger = new Logger(GroupsController.name);

  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  async createGroup(
    @Body() dto: CreateGroupDto,
    @Req() req: authenticatedRequestInterface.AuthenticatedRequest,
  ) {
    const userId = req.user.user_id;
    this.logger.log(`User ${userId} creating group: ${dto.group_name}`);

    const group = await this.groupsService.createGroup(dto, userId);
    return { success: true, group };
  }
}
