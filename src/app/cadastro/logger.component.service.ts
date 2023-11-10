import { Injectable } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { Ilogger } from '../model/Ilogger';
import { ICadastroCliente } from '../model/Icadastro-cliente';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  
  logs: Ilogger[] = [
    {
      acao: 'Cadastro: Estático (Para exemplo)',

      descricao: `Nome - Fulano;
       Quantidade - 2`,

      data: 'Estático',
      horario: 'Estático',
    },
    {
      acao: 'Cadastro: Estático (Para exemplo)',

      descricao: `Nome - Beltrano; 
      Quantidade - 2`,

      data: 'Estático',
      horario: 'Estático',
    },
  ];

  cadastroLog = (novoItem: ICadastroCliente) => {
    let log: Ilogger = {
      acao: 'Cadastro',
      descricao: `Nome - ${novoItem.nome}; 
        Idade - ${novoItem.idade}`,

      data: new Date().toLocaleDateString('pt-BR'),
      horario: new Date().toLocaleTimeString('pt-BR'),
    };
    this.logs.push(log);
  };

  excluirLog = (itemExcluido: ICadastroCliente) => {
    let log: Ilogger = {
      acao: 'Exclusão',

      descricao: `Nome - ${itemExcluido.nome}; 
        Idade - ${itemExcluido.idade}`,

      data: new Date().toLocaleDateString('pt-BR'),
      horario: new Date().toLocaleTimeString('pt-BR'),
    };
    this.logs.push(log);
  };

  editarLog = (itemVelho: ICadastroCliente, novoItem: ICadastroCliente) => {
    let log: Ilogger = {
      acao: 'Edição',
      descricao: `Nome - ${itemVelho.nome} para ${novoItem.nome}; 
        Idade - ${itemVelho.nome} para ${novoItem.idade}`,
      data: new Date().toLocaleDateString('pt-BR'),
      horario: new Date().toLocaleTimeString('pt-BR'),
    };
    this.logs.push(log);
  };
  limparLog = () => {
    while(this.logs.length > 0) {
        this.logs.shift();
      }
  }
}
