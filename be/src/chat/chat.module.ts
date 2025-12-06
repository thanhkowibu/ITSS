import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ChatController } from './chat.controller';
import { AIModule } from '../ai/ai.module';

@Module({
  imports: [AIModule],
  providers: [
    ChatGateway,
    ChatService,
    PrismaService,
    JwtService,
  ],
  controllers: [ChatController],
})
export class ChatModule {}