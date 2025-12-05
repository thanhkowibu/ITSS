import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AIService {
  private readonly logger = new Logger(AIService.name);

  constructor(private readonly http: HttpService) {}

  async explain(message: string): Promise<string> {
    // Lấy API Key ở ngoài khối try để dùng được trong cả catch
    const apiKey = (process.env.GOOGLE_STUDIO_API_KEY || '').trim();

    try {
      let model = (process.env.GOOGLE_MODEL_NAME || 'gemini-2.5-flash-lite').trim();
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const body = {
        contents: [
          {
            parts: [{ text: `"${message}"` }]
          }
        ]
      };

      this.logger.log(`Prompt sent to Gemini model "${model}": ${message}`);

      const response = await firstValueFrom(this.http.post(url, body));
      return this.extractText(response.data) || 'Không có nội dung trả về.';

    } catch (error) {
      // --- LOGIC MỚI: DEBUG MODEL KHI CÓ LỖI ---
      const errDetail = error.response?.data?.error || error.message;
      this.logger.error(`Gemini Error details: ${JSON.stringify(errDetail)}`);

      // Nếu lỗi 404 (Model not found), gọi API check danh sách model
      if (error.response?.status === 404) {
        await this.logAvailableModels(apiKey);
      }
      // -----------------------------------------

      return 'Lỗi kết nối AI.';
    }
  }

  /**
   * Hàm phụ trợ: Lấy danh sách model khả dụng cho Key hiện tại
   */
  private async logAvailableModels(apiKey: string) {
    try {
      this.logger.warn('--- Đang kiểm tra danh sách Model khả dụng cho Key này ---');
      const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
      
      const response = await firstValueFrom(this.http.get(listUrl));
      
      const modelNames = response.data.models.map((m: any) => m.name);
      this.logger.warn(`DANH SÁCH MODEL TÌM THẤY:\n${JSON.stringify(modelNames, null, 2)}`);
      
      this.logger.warn('Hãy copy một trong các tên trên (bỏ tiền tố "models/") vào file .env');
    } catch (listError) {
      this.logger.error('Không thể lấy danh sách model. Có thể Key sai hoặc chưa kích hoạt API.');
    }
  }

  private extractText(data: any): string | null {
    try {
      return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
    } catch {
      return null;
    }
  }
}