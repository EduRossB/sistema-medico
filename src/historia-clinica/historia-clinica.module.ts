import { Module } from '@nestjs/common';
import { HistoriaClinicaService } from './historia-clinica.service';
import { HistoriaClinicaController } from './historia-clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriaClinica } from './entities/historia-clinica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoriaClinica])],
  controllers: [HistoriaClinicaController],
  providers: [HistoriaClinicaService],
})
export class HistoriaClinicaModule {}
