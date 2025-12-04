import { IsNotEmpty, IsString } from 'class-validator';

export class ExplainMessageDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}
