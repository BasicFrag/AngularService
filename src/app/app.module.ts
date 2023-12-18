import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HistoricoComponent } from './lista/historico/historico.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent,
    LoginComponent,
    NotfoundComponent,
    HistoricoComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
