import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChatModule } from './chat/chat.module';
import { ChatBoxesModule } from './chat-boxes/chat-boxes.module';
import { AIModule } from './ai/ai.module';

@Module({
  imports: [AuthModule, PrismaModule, ChatModule, ChatBoxesModule, AIModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
