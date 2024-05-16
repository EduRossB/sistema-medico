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

  getAllMedicos() {
    return this.MedicoRepository.find();
  }
  createMedico(createMedicoDto) {
    const Medico = this.MedicoRepository.create(createMedicoDto);
    return this.MedicoRepository.save(Medico);
  }
  deleteMedico(id: number) {
    this.MedicoRepository.delete(id);
  }
  getMedicoById(numeroMatricula: number): any {
    return this.MedicoRepository.findOne({ where: { numeroMatricula } });
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
    return this.MedicoRepository.save(updatedMedico);
  }
}
