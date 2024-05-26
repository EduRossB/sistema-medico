import { Injectable } from '@nestjs/common';
import { Medico } from './entities/medico.entity';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedicosService {
  constructor(
    @InjectRepository(Medico)
    private readonly MedicoRepository: Repository<Medico>,
  ) {}

  async getAllMedicos() {
    return await this.MedicoRepository.find();
  }
  async createMedico(createMedicoDto) {
    const Medico = this.MedicoRepository.create(createMedicoDto);
    return await this.MedicoRepository.save(Medico);
  }
  async deleteMedico(id: number) {
    return await this.MedicoRepository.softDelete(id);
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
