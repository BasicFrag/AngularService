import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { ICadastroCliente } from '../model/Icadastro-cliente';
import { LoggerService } from './logger.component.service';
import { Ilogger } from '../model/Ilogger';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  nome!: string;
  listaClientes!: ICadastroCliente[];
  idade: number = 0;
  listaLogs!: Ilogger[];
  constructor(private cadastroService: CadastroService, private loggerService: LoggerService) {
    this.listaClientes = this.cadastroService.clientes;
    this.listaLogs = this.loggerService.logs;
  }
  inserirNovoTrem = (): void => {
    if (!this.nome || this.nome == "") {
      alert("Todos os campos são obrigatórios!");
      return;
    } 
    if (!this.idade || this.idade <= 18 && typeof this.idade != 'number') {
      alert("Idade inválida");
      return;
    }
    this.cadastroService.adicionar(this.nome, this.idade);
    const ultimaPos = this.listaClientes.length - 1;
    this.loggerService.cadastroLog(this.listaClientes[ultimaPos]);
    this.nome = "";
    this.idade = 0;
  };
}
