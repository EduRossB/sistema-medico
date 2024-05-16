import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './entities/practica.entity';

@Injectable()
export class PracticasService {
  constructor(
    @InjectRepository(Practica)
    private readonly practicaRepository: Repository<Practica>,
  ) {}

  createPractica(createPracticaDto: CreatePracticaDto) {
    const practica = this.practicaRepository.create(createPracticaDto);
    return this.practicaRepository.save(practica);
  }

  getAllPracticas() {
    return this.practicaRepository.find();
  }

  getPracticaById(id: number) {
    return this.practicaRepository.findOne({ where: { id } });
  }

  async updatePractica(id: number, updatePracticaDto: UpdatePracticaDto) {
    const practica = await this.practicaRepository.findOne({ where: { id } });
    if (!practica) {
      throw new Error('Practica no encontrada');
    }
    const updatedPractica = { ...practica, ...updatePracticaDto };
    return this.practicaRepository.save(updatedPractica);
  }

  async deletePractica(id: number) {
    const practica = await this.practicaRepository.findOne({ where: { id } });
    if (!practica) {
      throw new Error('Practica no encontrada');
    }
    return this.practicaRepository.remove(practica);
  }
}
