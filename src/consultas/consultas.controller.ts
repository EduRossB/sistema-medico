import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Controller('consultas')
export class ConsultasController {
  constructor(private readonly consultasService: ConsultasService) {}

  @Post()
  create(@Body() createConsultaDto: CreateConsultaDto) {
    return this.consultasService.createConsulta(createConsultaDto);
  }

  @Get()
  findAll() {
    return this.consultasService.getAllConsultas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultasService.getConsultaById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConsultaDto: UpdateConsultaDto,
  ) {
    return this.consultasService.updateConsulta(+id, updateConsultaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultasService.deleteConsulta(+id);
  }
}
