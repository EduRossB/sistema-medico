import { Module } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { MedicosController } from './medicos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { Consulta } from 'src/consultas/entities/consulta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medico, Consulta])],
  controllers: [MedicosController],
  providers: [MedicosService],
})
export class MedicosModule {}
