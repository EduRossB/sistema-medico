import { BaseEntity } from 'src/common/base-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Enfermedades extends BaseEntity {
  @Column()
  enfermedad: string;
}
