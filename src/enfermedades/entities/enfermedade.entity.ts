import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enfermedades {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enfermedad: string;
}
