import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@Controller('medicos')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicosService.createMedico(createMedicoDto);
  }

  @Get()
  findAll() {
    return this.medicosService.getAllMedicos();
  }

  @Get(':numeroMatricula')
  findOne(@Param('numeroMatricula') numeroMatricula: string) {
    return this.medicosService.getMedicoById(+numeroMatricula);
  }

  @Patch(':numeroMatricula')
  update(
    @Param('numeroMatricula') numeroMatricula: string,
    @Body() updateMedicoDto: UpdateMedicoDto,
  ) {
    return this.medicosService.updateMedico(+numeroMatricula, updateMedicoDto);
  }

  @Delete(':numeroMatricula')
  remove(@Param('numeroMatricula') numeroMatricula: string) {
    return this.medicosService.deleteMedico(+numeroMatricula);
  }
}
