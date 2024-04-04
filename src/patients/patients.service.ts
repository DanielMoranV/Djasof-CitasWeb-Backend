import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}
  create(createPatientDto: CreatePatientDto) {
    return this.prisma.patient.create({ data: createPatientDto });
  }

  findAll() {
    return this.prisma.patient.findMany({ where: { deleted: false } });
  }

  findOne(patientId: number) {
    return this.prisma.patient.findUnique({ where: { patientId } });
  }

  update(patientId: number, updatePatientDto: UpdatePatientDto) {
    return this.prisma.patient.update({
      where: { patientId },
      data: updatePatientDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
