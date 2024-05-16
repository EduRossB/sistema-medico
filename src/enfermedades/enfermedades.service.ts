import { Injectable } from '@nestjs/common';
import { Enfermedades } from './entities/enfermedade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEnfermedadesDto } from './dto/update-enfermedade.dto';

@Injectable()
export class EnfermedadesService {
  constructor(
    @InjectRepository(Enfermedades)
    private readonly enfermedadRepository: Repository<Enfermedades>,
  ) {}

  getAllEnfermedades() {
    return this.enfermedadRepository.find();
  }
  createEnfermedades(createEnfermedadesDto) {
    const enfermedad = this.enfermedadRepository.create(createEnfermedadesDto);
    return this.enfermedadRepository.save(enfermedad);
  }
  deleteEnfermedades(id: number) {
    this.enfermedadRepository.delete(id);
  }
  getEnfermedadesById(id: number): any {
    return this.enfermedadRepository.findOne({ where: { id } });
  }

  async updateEnfermedades(
    id: number,
    updateEnfermedadesDto: UpdateEnfermedadesDto,
  ): Promise<Enfermedades> {
    const enfermedad = await this.enfermedadRepository.findOne({
      where: { id },
    });
    if (!enfermedad) {
      throw new Error('Enfermedad no encontrado');
    }
    const updatedEnfermedad = { ...enfermedad, ...updateEnfermedadesDto };
    return this.enfermedadRepository.save(updatedEnfermedad);
  }
}
