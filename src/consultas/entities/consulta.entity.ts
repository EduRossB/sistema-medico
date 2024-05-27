import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { Medico } from 'src/medicos/entities/medico.entity';
import { BaseEntity } from 'src/common/base-entity';
import { Enfermedades } from 'src/enfermedades/entities/enfermedade.entity';

@Entity()
export class Consulta extends BaseEntity {
  @ManyToOne(() => Medico, (medico) => medico, { nullable: true })
  @JoinColumn()
  medico: Medico;

  @Column()
  fechaRealizacion: string;

  @Column()
  motivo: string;

  @ManyToOne(() => Enfermedades, (enfermedad) => enfermedad)
  @JoinColumn()
  diagnosticoEnfermedad: Enfermedades;

  @Column()
  diagnosticoConfirmado: boolean;

  @ManyToOne(
    () => HistoriaClinica,
    (historiaClinica) => historiaClinica.consultas,
  )
  @JoinColumn({ name: 'HistoriaClinicaID' })
  historiaClinica: HistoriaClinica;
}
