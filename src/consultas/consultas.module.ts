import { Module } from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { ConsultasController } from './consultas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta, HistoriaClinica, Paciente])],
  controllers: [ConsultasController],
  providers: [ConsultasService],
})
export class ConsultasModule {}
