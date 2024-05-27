import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePacienteDto {
  @IsNotEmpty()
  @IsNumber()
  DNI: number;

  @IsNotEmpty()
  @IsString()
  nombrePaciente: string;

  @IsNotEmpty()
  @IsString()
  fechaNacimiento: string;

  @IsNotEmpty()
  @IsString()
  nombreObraSocial: string;
}
