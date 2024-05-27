import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { Consulta } from './entities/consulta.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { Enfermedades } from 'src/enfermedades/entities/enfermedade.entity';

@Injectable()
export class ConsultasService {
  constructor(
    @InjectRepository(Consulta)
    private readonly ConsultaRepository: Repository<Consulta>,
    @InjectRepository(HistoriaClinica)
    private readonly HistoriaClinicaRepository: Repository<HistoriaClinica>,
    @InjectRepository(Enfermedades)
    private readonly EnfermedadRepository: Repository<Enfermedades>,
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

    if (createConsultaDto.diagnosticoConfirmado) {
      const enfermedad = await this.EnfermedadRepository.findOne({
        where: { enfermedad: createConsultaDto.diagnosticoEnfermedad },
      });
      if (!enfermedad) {
        throw new Error('Enfermedad no registrada');
      }
      consulta['diagnosticoEnfermedad'] = enfermedad;
    }
    console.log(consulta);
    const savedConsulta = await this.ConsultaRepository.save(consulta);

    return savedConsulta;
  }

  async deleteConsulta(id: number) {
    return await this.ConsultaRepository.softDelete(id);
  }

  async getConsultaById(id: number): Promise<Consulta> {
    return await this.ConsultaRepository.findOne({
      where: { id },
      relations: ['diagnosticoEnfermedad'],
    });
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
