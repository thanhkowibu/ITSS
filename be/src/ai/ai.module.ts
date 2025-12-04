import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AIService } from './ai.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 100000,
        maxRedirects: 5,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  ],

  providers: [AIService],
  exports: [AIService], // Cho phép ChatService hoặc Gateway dùng AIService
})
export class AIModule {}
