import { Module } from '@nestjs/common';
import { HistoriaClinicaService } from './historia-clinica.service';
import { HistoriaClinicaController } from './historia-clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriaClinica } from './entities/historia-clinica.entity';
import { Consulta } from 'src/consultas/entities/consulta.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoriaClinica, Consulta, Paciente])],
  controllers: [HistoriaClinicaController],
  providers: [HistoriaClinicaService],
})
export class HistoriaClinicaModule {}
