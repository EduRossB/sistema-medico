import { Paciente } from 'src/pacientes/entities/paciente.entity';

export class CreateHistoriaClinicaDto {
  paciente: Paciente;
  consultas?: number;
  practias?: number;
}
