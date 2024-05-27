import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEnfermedadesDto {
  @IsNotEmpty()
  @IsString()
  enfermedad: string;
}
