import { Component } from '@angular/core';
import { Ilogger } from 'src/app/model/Ilogger';
import { LoggerService } from './logger.component.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export class HistoricoComponent {
  listaLogs!: Ilogger[];

  constructor(private loggerService: LoggerService) {
    this.listaLogs = this.loggerService.logs;
  }

  limparLogs = (): void => {
    this.loggerService.limparLog();
  };
  
}
