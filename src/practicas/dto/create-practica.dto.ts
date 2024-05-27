import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePracticaDto {
  @IsNotEmpty()
  @IsNumber()
  medico: number;

  @IsNotEmpty()
  @IsString()
  fechaRealizacion: string;

  @IsNotEmpty()
  @IsNumber()
  duracion: number;

  @IsNotEmpty()
  @IsString()
  complicaciones: string;

  @IsNotEmpty()
  @IsString()
  resultadoFinal: string;

  @IsNotEmpty()
  @IsNumber()
  historiaClinica: number;
}
