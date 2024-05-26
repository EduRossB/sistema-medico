import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Medico } from 'src/medicos/entities/medico.entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { BaseEntity } from 'src/common/base-entity';

@Entity()
export class Practica extends BaseEntity {
  @ManyToOne(() => Medico, (medico) => medico)
  @JoinColumn({ name: 'DoctorID' })
  medico: Medico;

  @Column()
  fechaRealizacion: string;

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
  @JoinColumn({ name: 'HistoriaClinicaID' })
  historiaClinica: HistoriaClinica;
}
