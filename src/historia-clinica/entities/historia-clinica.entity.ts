import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Practica } from 'src/practicas/entities/practica.entity';
import { Consulta } from 'src/consultas/entities/consulta.entity';

@Entity()
export class HistoriaClinica {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Paciente)
  @JoinColumn()
  paciente: Paciente;

  @OneToMany(() => Consulta, (consulta) => consulta.historiaClinica)
  consultas: Consulta[];

  @OneToMany(() => Practica, (practica) => practica.historiaClinica)
  practicas: Practica[];
}
