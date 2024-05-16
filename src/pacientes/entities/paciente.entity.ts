import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  DNI: number;

  @Column()
  nombrePaciente: string;

  @Column()
  fechaNacimiento: string;

  @Column()
  nombreObraSocial: string;
}
