import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { Consulta } from './entities/consulta.entity';

@Injectable()
export class ConsultasService {
  constructor(
    @InjectRepository(Consulta)
    private readonly ConsultaRepository: Repository<Consulta>,
  ) {}
  getAllConsultas() {
    return this.ConsultaRepository.find();
  }

  createConsulta(CreateConsultaDto) {
    const consulta = this.ConsultaRepository.create(CreateConsultaDto);
    return this.ConsultaRepository.save(consulta);
  }

  deleteConsulta(id: number) {
    this.ConsultaRepository.delete(id);
  }

  getConsultaById(id: number): any {
    this.ConsultaRepository.findOne({ where: { id } });
  }
  async updateConsulta(
    id: number,
    updateConsultaDto: UpdateConsultaDto,
  ): Promise<Consulta> {
    const consulta = await this.ConsultaRepository.findOne({ where: { id } });
    if (!consulta) {
      throw new Error('Consulta no encontrada');
    }
    const updatedConsulta = Object.assign(consulta, updateConsultaDto);
    return this.ConsultaRepository.save(updatedConsulta);
  }
}
