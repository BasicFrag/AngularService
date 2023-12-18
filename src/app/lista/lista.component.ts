import { Component } from '@angular/core';
import { ICadastroCliente } from '../model/Icadastro-cliente';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { Ilogger } from '../model/Ilogger';
import { LoggerService } from './historico/logger.component.service';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  listaClientes!: ICadastroCliente[];
  listaLogs!: Ilogger[];
  nome!: string;
  idade!: number;
  getIndex!: number;
  isActive!: boolean;

  constructor(
    private cadastroService: CadastroService,
    private loggerService: LoggerService
  ) {
    this.listaClientes = this.cadastroService.clientes;
    this.listaLogs = this.loggerService.logs;
   
  }
  excluirCliente = (index: number): void => {
    this.loggerService.excluirLog(this.listaClientes[index]);
    this.cadastroService.excluir(index);
  };
  editarCliente = (): void => {
    const index: number = this.getIndex;
    const clienteAtual: ICadastroCliente = this.listaClientes[index];
    this.cadastroService.editar(index, this.nome, this.idade);
    this.loggerService.editarLog(clienteAtual, this.listaClientes[index]);
  };
  limparLogs = (): void => {
    while (this.listaLogs.length > 0) {
      this.loggerService.limparLog();
    }
  };
  
}
