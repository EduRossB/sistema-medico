import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMedicoDto {
  @IsNotEmpty()
  @IsNumber()
  numeroMatricula: number;

  @IsNotEmpty()
  @IsString()
  nombreMedico: string;

  @IsNotEmpty()
  @IsString()
  especialidad: string;

  @IsNotEmpty()
  @IsString()
  fechaIngreso: string;
}
