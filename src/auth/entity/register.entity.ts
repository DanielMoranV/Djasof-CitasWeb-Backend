import { Auth } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class RegisterEntity implements Auth {
  constructor(partial: Partial<RegisterEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  authId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  username: string;

  @Exclude()
  password: string;

  @ApiProperty()
  roleId: number;
}
