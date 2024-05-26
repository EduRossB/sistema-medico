import { BaseEntity } from 'src/common/base-entity';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Paciente extends BaseEntity {
  @Column()
  DNI: number;

  @Column()
  nombrePaciente: string;

  @Column()
  fechaNacimiento: string;

  @Column()
  nombreObraSocial: string;

  @OneToOne(
    () => HistoriaClinica,
    (historiaClinica) => historiaClinica.paciente,
  )
  historiaClinica: HistoriaClinica;
}
