import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ServicoModule } from './servico/servico.module';
import { ProfissionalModule } from './profissionais/profissional.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [DbModule, ServicoModule, ProfissionalModule, AgendamentoModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
