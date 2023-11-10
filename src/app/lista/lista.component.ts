import { Component } from '@angular/core';
import { ICadastroCliente } from '../model/Icadastro-cliente';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { Ilogger } from '../model/Ilogger';
import { LoggerService } from '../cadastro/logger.component.service';

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
  
  
  constructor(private cadastroService: CadastroService, private loggerService: LoggerService) {
    this.listaClientes = this.cadastroService.clientes;
    this.listaLogs = this.loggerService.logs;
  }
  excluirTrem = (index: number): void => {
    this.loggerService.excluirLog(this.listaClientes[index]);
    this.cadastroService.excluir(index);
  };
  editarTrem = (): void => {
    let index: number = this.getIndex;
    let clienteAtual: ICadastroCliente = this.listaClientes[index];
    this.cadastroService.editar(index, this.nome, this.idade);
    this.loggerService.editarLog(clienteAtual, this.listaClientes[index])
  };
  limparLogs = (): void => {
    while(this.listaLogs.length > 0) {
      this.loggerService.limparLog();
    }
  }

}
