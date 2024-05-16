import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientesModule } from './pacientes/pacientes.module';
import { MedicosModule } from './medicos/medicos.module';
import { EnfermedadesModule } from './enfermedades/enfermedades.module';
import { ConsultasModule } from './consultas/consultas.module';
import { PracticasModule } from './practicas/practicas.module';
import { HistoriaClinicaModule } from './historia-clinica/historia-clinica.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'medical_patients',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PacientesModule,
    MedicosModule,
    EnfermedadesModule,
    ConsultasModule,
    PracticasModule,
    HistoriaClinicaModule,
  ],
})
export class AppModule {}
