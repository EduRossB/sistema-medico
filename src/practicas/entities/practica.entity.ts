import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Medico } from 'src/medicos/entities/medico.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Medico, (medico) => medico.consultas)
  medico: Medico;

  @Column()
  fechaRealizacion: Date;

  @Column()
  duracion: number;

  @Column()
  complicaciones: string;

  @Column()
  resultadoFinal: string;

  @ManyToOne(
    () => HistoriaClinica,
    (historiaClinica) => historiaClinica.practicas,
  )
  historiaClinica: HistoriaClinica;
}
