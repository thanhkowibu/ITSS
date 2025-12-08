import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * Search users by name or email (case-insensitive)
   */
  async searchUsers(q: string, limit = 10) {
    if (!q || q.trim().length === 0) {
      return [];
    }

    const users = await this.prisma.users.findMany({
      where: {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { email: { contains: q, mode: 'insensitive' } },
        ],
      },
      select: { user_id: true, name: true, email: true },
      take: limit,
    });

    return users;
  }
}
