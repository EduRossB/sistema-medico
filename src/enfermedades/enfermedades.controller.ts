import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EnfermedadesService } from './enfermedades.service';
import { CreateEnfermedadesDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadesDto } from './dto/update-enfermedade.dto';

@Controller('enfermedades')
export class EnfermedadesController {
  constructor(private readonly enfermedadesService: EnfermedadesService) {}

  @Post()
  create(@Body() createEnfermedadeDto: CreateEnfermedadesDto) {
    return this.enfermedadesService.createEnfermedades(createEnfermedadeDto);
  }

  @Get()
  async getAllEnfermedades(@Query('texto') texto?: string) {
    return await this.enfermedadesService.getAllEnfermedades(texto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfermedadesService.getEnfermedadesById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnfermedadeDto: UpdateEnfermedadesDto,
  ) {
    return this.enfermedadesService.updateEnfermedades(
      +id,
      updateEnfermedadeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermedadesService.deleteEnfermedades(+id);
  }
}
