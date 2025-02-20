import { Patient } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class PatientEntity implements Patient {
  @ApiProperty()
  patientId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  documentType: string;

  @ApiProperty()
  dni: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  profilePhoto: string;

  @ApiProperty()
  online: boolean;

  @ApiProperty()
  deleted: boolean;

  @ApiProperty()
  password: string;

  @ApiProperty()
  deletedAt: Date;
}
