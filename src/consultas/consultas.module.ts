import { Module } from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { ConsultasController } from './consultas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Enfermedades } from 'src/enfermedades/entities/enfermedade.entity';
import { Medico } from 'src/medicos/entities/medico.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Consulta,
      HistoriaClinica,
      Paciente,
      Enfermedades,
      Medico,
    ]),
  ],
  controllers: [ConsultasController],
  providers: [ConsultasService],
})
export class ConsultasModule {}
