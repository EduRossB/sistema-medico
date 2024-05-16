import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { HistoriaClinica } from 'src/historia-clinica/entities/historia-clinica.entity';
import { Medico } from 'src/medicos/entities/medico.entity';

@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Medico, (medico) => medico.practicas)
  medico: Medico;

  @Column()
  fechaRealizacion: Date;

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
  historiaClinica: HistoriaClinica; // Relación muchos a uno con la entidad HistoriaClinica
}
