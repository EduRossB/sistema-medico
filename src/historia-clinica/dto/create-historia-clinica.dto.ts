import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

export class CreateHistoriaClinicaDto {
  @IsNotEmpty()
  @IsString()
  paciente: Paciente;

  @IsNotEmpty()
  @IsNumber()
  consultas?: number;

  @IsNotEmpty()
  @IsNumber()
  practias?: number;
}
