import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './entities/practica.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';

@Injectable()
export class PracticasService {
  constructor(
    @InjectRepository(Practica)
    private readonly practicaRepository: Repository<Practica>,
    @InjectRepository(HistoriaClinica)
    private readonly historiaClinicaRepository: Repository<HistoriaClinica>,
  ) {}

  async createPractica(createPracticaDto): Promise<any> {
    const historiaClinica = await this.historiaClinicaRepository.findOne({
      where: { id: createPracticaDto.historiaClinica },
    });
    if (!historiaClinica) {
      throw new Error('Historia clinica no encontrada');
    }
    const practica = this.practicaRepository.create(createPracticaDto);
    practica['historiaClinica'] = historiaClinica;

    const savedPractica = await this.practicaRepository.save(practica);
    return savedPractica;
  }

  async getAllPracticas() {
    return await this.practicaRepository.find();
  }

  async getPracticaById(id: number) {
    return await this.practicaRepository.findOne({ where: { id } });
  }

  async updatePractica(
    id: number,
    updatePracticaDto: UpdatePracticaDto,
  ): Promise<Practica> {
    const practica = await this.practicaRepository.findOne({ where: { id } });
    if (!practica) {
      throw new Error('Practica no encontrada');
    }
    const updatedConsulta = Object.assign(practica, updatePracticaDto);
    return this.practicaRepository.save(updatedConsulta);
  }

  async deletePractica(id: number) {
    const practica = await this.practicaRepository.findOne({ where: { id } });
    if (!practica) {
      throw new Error('Practica no encontrada');
    }
    return await this.practicaRepository.softDelete(practica);
  }
}
