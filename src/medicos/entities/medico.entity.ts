import { BaseEntity } from 'src/common/base-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Medico extends BaseEntity {
  @Column()
  numeroMatricula: number;

  @Column()
  nombreMedico: string;

  @Column()
  especialidad: string;

  @Column()
  fechaIngreso: string;
}
