import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Controller('profissional')
export class ProfissionalController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  buscarTodos() {
    return this.prisma.profissional.findMany();
  }

}