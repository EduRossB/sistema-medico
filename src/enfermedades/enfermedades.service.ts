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

  async getAllEnfermedades(texto?: string) {
    if (texto) {
      const textoMinuscula = texto.toLowerCase();
      return await this.enfermedadRepository
        .createQueryBuilder('enfermedades')
        .where('LOWER(enfermedades.enfermedad) LIKE :textoMinuscula', {
          textoMinuscula: `%${textoMinuscula}%`,
        })
        .getMany();
    }
    return await this.enfermedadRepository.find();
  }
  async createEnfermedades(createEnfermedadesDto) {
    const enfermedad = this.enfermedadRepository.create(createEnfermedadesDto);
    return await this.enfermedadRepository.save(enfermedad);
  }
  async deleteEnfermedades(id: number) {
    return await this.enfermedadRepository.softDelete(id);
  }
  async getEnfermedadesById(id: number): Promise<Enfermedades> {
    return await this.enfermedadRepository.findOne({ where: { id } });
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
