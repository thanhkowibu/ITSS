import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a new chat group and add members
   */
  async createGroup(dto: CreateGroupDto, creatorUserId: number) {
    const { group_name, member_ids = [] } = dto;

    if (!group_name || group_name.trim().length === 0) {
      throw new BadRequestException('group_name is required');
    }

    // Ensure members are unique and do not include creator
    const uniqueMemberIds = Array.from(new Set(member_ids || [])).filter((id) => id !== creatorUserId);

    try {
      // Validate member users exist
      if (uniqueMemberIds.length > 0) {
        const found = await this.prisma.users.findMany({ where: { user_id: { in: uniqueMemberIds } }, select: { user_id: true } });
        const foundIds = new Set(found.map((f) => f.user_id));
        const missing = uniqueMemberIds.filter((id) => !foundIds.has(id));
        if (missing.length > 0) {
          throw new NotFoundException(`Users not found: ${missing.join(',')}`);
        }
      }

      // Create the group
      const createdGroup = await this.prisma.chat_groups.create({
        data: {
          group_name,
          created_by: creatorUserId,
        },
      });

      // Add creator as member
      const membershipRecords: any[] = [{ group_id: createdGroup.group_id, user_id: creatorUserId }];

      // Add other members
      for (const uid of uniqueMemberIds) {
        membershipRecords.push({ group_id: createdGroup.group_id, user_id: uid });
      }

      // Bulk create memberships (ignore duplicates)
      for (const rec of membershipRecords) {
        await this.prisma.group_members.create({ data: rec });
      }

      // Return created group with members
      const groupWithMembers = await this.prisma.chat_groups.findUnique({
        where: { group_id: createdGroup.group_id },
        include: { members: { include: { user: { select: { user_id: true, name: true, email: true } } } } },
      });

      return groupWithMembers;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) throw error;
      const msg = error instanceof Error ? error.message : 'Unknown error';
      throw new InternalServerErrorException(`Failed to create group: ${msg}`);
    }
  }
}
