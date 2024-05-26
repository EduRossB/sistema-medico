// src/pacientes/pacientes.service.ts
import { Injectable } from '@nestjs/common';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
    @InjectRepository(HistoriaClinica)
    private readonly historiaClinicaRepository: Repository<HistoriaClinica>,
  ) {}

  getAllPaciente() {
    return this.pacienteRepository.find({ relations: ['historiaClinica'] });
  }

  async createPaciente(createPatientDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPatientDto);
    console.log(paciente);

    const pacienteGuardado = await this.pacienteRepository.save(paciente);
    console.log(pacienteGuardado);

    const historiaClinica = this.historiaClinicaRepository.create({
      paciente: pacienteGuardado,
    });

  

    await this.historiaClinicaRepository.save(historiaClinica);
    return pacienteGuardado;
  }

  deletePaciente(id: number) {
    this.pacienteRepository.delete(id);
  }

  getPacienteById(id: number): Promise<Paciente> {
    return this.pacienteRepository.findOne({
      where: { id },
      relations: ['historiaClinica'],
    });
  }

  async updatePaciente(
    id: number,
    updatePacienteDto: UpdatePacienteDto,
  ): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({
      where: { id },
      relations: ['historiaClinica'],
    });
    console.log(paciente);

    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }

    const updatedHistoriaClinica: DeepPartial<HistoriaClinica> = {
      ...paciente.historiaClinica,
    };

    const updatePaciente: DeepPartial<Paciente> = {
      ...paciente,
      ...updatePacienteDto,
      historiaClinica: updatedHistoriaClinica,
    };

    console.log(updatePaciente);
    return this.pacienteRepository.save(updatePaciente);
  }
}
