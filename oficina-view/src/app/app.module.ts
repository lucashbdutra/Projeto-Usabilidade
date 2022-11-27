import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CadastroClienteComponent } from './pages/cliente/cadastro-cliente/cadastro-cliente.component';
import { ClientesComponent } from './pages/cliente/clientes/clientes.component';
import { GastosMensaisComponent } from './pages/financas/gastos-mensais/gastos-mensais.component';
import { RelatorioComponent } from './pages/financas/relatorio/relatorio.component';
import { CadastroFuncionarioComponent } from './pages/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { FuncionariosComponent } from './pages/funcionario/funcionarios/funcionarios.component';
import { CadastroComponent } from './pages/login/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login/login.component';
import { CadastroProdutoComponent } from './pages/produto/cadastro-produto/cadastro-produto.component';
import { ProdutosComponent } from './pages/produto/produtos/produtos.component';
import { SelectClientComponent } from './pages/venda/select-client/select-client.component';
import { VendasComponent } from './pages/venda/vendas/vendas.component';
import { ServicosComponent } from './pages/produto/servicos/servicos.component';
import { EstoqueComponent } from './pages/produto/estoque/estoque.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    CadastroComponent,
    HomeComponent,
    ClientesComponent,
    FuncionariosComponent,
    CadastroFuncionarioComponent,
    ProdutosComponent,
    CadastroProdutoComponent,
    CadastroClienteComponent,
    ConfirmModalComponent,
    VendasComponent,
    SelectClientComponent,
    GastosMensaisComponent,
    RelatorioComponent,
    ServicosComponent,
    EstoqueComponent

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
    NgxPaginationModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
