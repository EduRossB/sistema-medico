import { Entity, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Practica } from 'src/practicas/entities/practica.entity';
import { Consulta } from 'src/consultas/entities/consulta.entity';
import { BaseEntity } from 'src/common/base-entity';

@Entity()
export class HistoriaClinica extends BaseEntity {
  @OneToOne(() => Paciente, (paciente) => paciente.historiaClinica)
  @JoinColumn()
  paciente: Paciente;

  @OneToMany(() => Consulta, (consulta) => consulta.historiaClinica, {
    cascade: true,
  })
  consultas: Consulta[];

  @OneToMany(() => Practica, (practica) => practica.historiaClinica, {
    cascade: true,
  })
  practicas: Practica[];
}
