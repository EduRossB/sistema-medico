import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { Consulta } from './entities/consulta.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';

@Injectable()
export class ConsultasService {
  constructor(
    @InjectRepository(Consulta)
    private readonly ConsultaRepository: Repository<Consulta>,
    @InjectRepository(HistoriaClinica)
    private readonly HistoriaClinicaRepository: Repository<HistoriaClinica>,
  ) {}
  async getAllConsultas() {
    return await this.ConsultaRepository.find();
  }

  async createConsulta(createConsultaDto): Promise<any> {
    const historiaClinica = await this.HistoriaClinicaRepository.findOne({
      where: { id: createConsultaDto.historiaClinicaId },
    });

    if (!historiaClinica) {
      throw new Error('Historia clinica no encontrada');
    }

    const consulta = this.ConsultaRepository.create(createConsultaDto);
    consulta['historiaClinica'] = historiaClinica;

    const savedConsulta = await this.ConsultaRepository.save(consulta);

    return savedConsulta;
  }

  async deleteConsulta(id: number) {
    return await this.ConsultaRepository.softDelete(id);
  }

  async getConsultaById(id: number): Promise<Consulta> {
    return await this.ConsultaRepository.findOne({ where: { id } });
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
