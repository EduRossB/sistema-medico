import { Injectable } from '@nestjs/common';
import { Medico } from './entities/medico.entity';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from 'src/consultas/entities/consulta.entity';

@Injectable()
export class MedicosService {
  constructor(
    @InjectRepository(Medico)
    private readonly MedicoRepository: Repository<Medico>,
    @InjectRepository(Consulta)
    private readonly ConsultaRepository: Repository<Consulta>,
  ) {}

  async getAllMedicos() {
    return await this.MedicoRepository.find();
  }
  async createMedico(createMedicoDto) {
    const Medico = this.MedicoRepository.create(createMedicoDto);
    return await this.MedicoRepository.save(Medico);
  }
  async deleteMedico(id: number) {
    await this.ConsultaRepository.createQueryBuilder()
      .update(Consulta)
      .set({ medico: null })
      .where('id = :id', { id }).execute;
    await this.MedicoRepository.delete(id);
  }
  async getMedicoById(numeroMatricula: number): Promise<Medico> {
    return await this.MedicoRepository.findOne({ where: { numeroMatricula } });
  }

  async updateMedico(
    numeroMatricula: number,
    updateMedicoDto: UpdateMedicoDto,
  ): Promise<Medico> {
    const Medico = await this.MedicoRepository.findOne({
      where: { numeroMatricula },
    });
    if (!Medico) {
      throw new Error('Paciente no encontrado');
    }
    const updatedMedico = { ...Medico, ...updateMedicoDto };
    return await this.MedicoRepository.save(updatedMedico);
  }
}
