import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CadastroClienteComponent } from './pages/cliente/cadastro/cadastro.component';
import { ClientesComponent } from './pages/cliente/clientes/clientes.component';
import { CadastroFuncionarioComponent } from './pages/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { FuncionariosComponent } from './pages/funcionario/funcionarios/funcionarios.component';
import { CadastroComponent } from './pages/login/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ProdutosComponent } from './pages/produto/produtos/produtos.component';
import { CadastroProdutoComponent } from './pages/produto/cadastro-produto/cadastro-produto.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    CadastroComponent,
    HomeComponent,
    ClientesComponent,
    CadastroClienteComponent,
    FuncionariosComponent,
    CadastroFuncionarioComponent,
    ProdutosComponent,
    CadastroProdutoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    MatIconModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
