import { IsInt, Min } from "class-validator";
import { Type } from "class-transformer";

export class ExplainMessageDto {
  @Type(() => Number)   // chuyển string -> number
  @IsInt()              // phải là số nguyên
  @Min(1)               // message_id >= 1
  message_id: number;
}
