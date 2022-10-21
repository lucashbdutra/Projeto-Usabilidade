import { CadastroClienteComponent } from './pages/cliente/cadastro/cadastro.component';
import { ClientesComponent } from './pages/cliente/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { GuardService } from './services/guard.service';
import { LoginComponent } from './pages/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/login/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login/cadastro', component: CadastroComponent
  },

  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'home', canActivate:[GuardService], component: HomeComponent
  },
  {
    path: 'clientes', canActivate:[GuardService], component: ClientesComponent
  },
  {
    path: 'clientes/cadastro', canActivate:[GuardService], component: CadastroClienteComponent
  },
  {
    path: 'clientes/editar/:id', canActivate:[GuardService], component: CadastroClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
