import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateConsultaDto {
  @IsNumber()
  medico: number;

  @IsNotEmpty()
  @IsString()
  fechaRealizacion: string;

  @IsNotEmpty()
  @IsString()
  motivo: string;

  @IsNotEmpty()
  @IsString()
  diagnosticoEnfermedad: string;

  @IsNotEmpty()
  @IsBoolean()
  diagnosticoConfirmado: boolean;

  historiaClinica?: number;
}
