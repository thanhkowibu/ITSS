import { IsString, IsNotEmpty, IsArray, ArrayUnique, IsOptional } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  group_name: string;

  // Optional array of user IDs to add to the group (excluding creator)
  @IsArray()
  @ArrayUnique()
  @IsOptional()
  member_ids?: number[];
}
