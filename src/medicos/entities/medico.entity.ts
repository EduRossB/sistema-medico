import { Consulta } from 'src/consultas/entities/consulta.entity';
import { Practica } from 'src/practicas/entities/practica.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numeroMatricula: number;

  @Column()
  nombreMedico: string;

  @Column()
  especialidad: string;

  @Column()
  fechaIngreso: string;

  @OneToMany(() => Consulta, (consulta) => consulta.medico)
  consultas: Consulta[];

  @OneToMany(() => Practica, (practica) => practica.medico)
  practicas: Practica[];
}
