import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { Medico } from 'src/medicos/entities/medico.entity';
import { BaseEntity } from 'src/common/base-entity';

@Entity()
export class Consulta extends BaseEntity {
  @ManyToOne(() => Medico, (medico) => medico)
  @JoinColumn({ name: 'DoctorID' })
  medico: Medico;

  @Column()
  fechaRealizacion: string;

  @Column()
  motivo: string;

  @Column()
  diagnosticoEnfermedad: string;

  @Column()
  diagnosticoConfirmado: boolean;

  @ManyToOne(
    () => HistoriaClinica,
    (historiaClinica) => historiaClinica.consultas,
  )
  @JoinColumn({ name: 'HistoriaClinicaID' })
  historiaClinica: HistoriaClinica;
}
