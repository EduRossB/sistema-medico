import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfermedadesDto } from './create-enfermedade.dto';

export class UpdateEnfermedadesDto extends PartialType(CreateEnfermedadesDto) {}
