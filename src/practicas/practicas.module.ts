import { Module } from '@nestjs/common';
import { PracticasService } from './practicas.service';
import { PracticasController } from './practicas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Practica])],
  controllers: [PracticasController],
  providers: [PracticasService],
})
export class PracticasModule {}
