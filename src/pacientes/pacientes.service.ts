import { Injectable } from '@nestjs/common';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}
  getAllPaciente() {
    return this.pacienteRepository.find();
  }
  createPaciente(createPatientDto) {
    const patient = this.pacienteRepository.create(createPatientDto);
    return this.pacienteRepository.save(patient);
  }
  deletePaciente(id: number) {
    this.pacienteRepository.delete(id);
  }
  getPacienteById(id: number): any {
    return this.pacienteRepository.findOne({ where: { id } });
  }

  async updatePaciente(
    id: number,
    updatePacienteDto: UpdatePacienteDto,
  ): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({ where: { id } });
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }
    const updatePaciente = { ...paciente, ...updatePacienteDto };
    return this.pacienteRepository.save(updatePaciente);
  }
}
