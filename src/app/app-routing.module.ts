import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HistoricoComponent } from './lista/historico/historico.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    children: [
    {
      path:'clientes',
      component: ListaComponent
    },
    {
      path:'historico',
      component: HistoricoComponent
    }
  ]
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
