import { Module } from '@nestjs/common';
import { PracticasService } from './practicas.service';
import { PracticasController } from './practicas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Practica, HistoriaClinica])],
  controllers: [PracticasController],
  providers: [PracticasService],
})
export class PracticasModule {}
