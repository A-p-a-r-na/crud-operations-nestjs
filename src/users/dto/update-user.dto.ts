import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id!: number;

  @IsEmail()
  email!: string;

  @IsString()
  name!: string;
}
