import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PracticasService } from './practicas.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

@Controller('practicas')
export class PracticasController {
  constructor(private readonly practicasService: PracticasService) {}

  @Post()
  create(@Body() createPracticaDto: CreatePracticaDto) {
    return this.practicasService.createPractica(createPracticaDto);
  }

  @Get()
  findAll() {
    return this.practicasService.getAllPracticas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practicasService.getPracticaById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePracticaDto: UpdatePracticaDto,
  ) {
    return this.practicasService.updatePractica(+id, updatePracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practicasService.deletePractica(+id);
  }
}
