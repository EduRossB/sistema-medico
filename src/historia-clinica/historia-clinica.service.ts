import { Injectable } from '@nestjs/common';
import { UpdateHistoriaClinicaDto } from './dto/update-historia-clinica.dto';
import { HistoriaClinica } from './entities/historia-clinica.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Consulta } from 'src/consultas/entities/consulta.entity';

@Injectable()
export class HistoriaClinicaService {
  constructor(
    @InjectRepository(HistoriaClinica)
    private readonly historiaClinicaRepository: Repository<HistoriaClinica>,
    @InjectRepository(Consulta)
    private readonly ConsultaRepository: Repository<Consulta>,
  ) {}
  async getAllHistoriasClinicas() {
    return await this.historiaClinicaRepository.find({
      relations: ['paciente'],
    });
  }

  async createHistoriaClinica(CreateHistoriaClinicaDto) {
    const historiaClinica = this.historiaClinicaRepository.create(
      CreateHistoriaClinicaDto,
    );
    await this.historiaClinicaRepository.save(historiaClinica);
  }

  async deleteHistoriaClinica(id: number) {
    return await this.historiaClinicaRepository.softDelete(id);
  }

  async getHistoriaClinicaById(id: number): Promise<HistoriaClinica> {
    const historiaClinica = await this.historiaClinicaRepository.findOne({
      where: { id },
      relations: ['consultas', 'practicas'],
    });

    if (!historiaClinica) {
      throw new Error('Historia clinica no encontrada');
    }

    return historiaClinica;
  }

  async updateHistoriaClinica(
    id: number,
    updateHistoriaClinicaDto: UpdateHistoriaClinicaDto,
  ): Promise<HistoriaClinica> {
    const historiaClinica = await this.historiaClinicaRepository.findOne({
      where: { id },
    });
    if (!historiaClinica) {
      throw new Error('HistoriaClinica no encontrada');
    }
    const updatedHistoriaClinica = Object.assign(
      historiaClinica,
      updateHistoriaClinicaDto,
    );
    return await this.historiaClinicaRepository.save(updatedHistoriaClinica);
  }
}
