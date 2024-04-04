import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { documentType, sex } from 'src/users/enum/users.enum';

export class CreatePatientDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Nombre es requerido' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Apellidos son obligatorios' })
  @IsString()
  surname: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Email es requerido' })
  @IsEmail()
  email: string;

  @ApiProperty({ enum: sex })
  @IsEnum(sex)
  @IsOptional()
  @IsString()
  sex: string;

  @ApiProperty({ enum: documentType })
  @IsNotEmpty()
  @IsEnum(documentType)
  @IsString()
  documentType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dni: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  profilePhoto: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  online: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  deleted: boolean;

  //   @ApiProperty()
  //   @IsOptional()
  //   @IsDateString()
  //   deletedAt: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
