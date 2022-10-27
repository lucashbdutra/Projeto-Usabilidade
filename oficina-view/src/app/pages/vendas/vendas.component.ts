import { ClientesService } from 'src/app/services/clientes.service';
import { EstoqueService } from './../../services/estoque.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { Servico } from 'src/app/interfaces/servico';
import { Estoque } from 'src/app/interfaces/estoque';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  venda = this.formBuilder.group({
    produtos: [[''], Validators.required ],
    servicos: [[], Validators.required ],
    cliente: [{}, Validators.required]
  })

  produtos?: Produto[];
  servicos?: Servico[];
  clientes?: Cliente[];

  teste: Servico[] = [];

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private estoqueService: EstoqueService,
    private clienteService: ClientesService
  ) { }

  ngOnInit(): void {
    this.buscarItens();
    this.buscarClientes();
  }

  buscarItens(){
    this.estoqueService.listar().subscribe((estoque: Estoque)=>{
      this.produtos = estoque.produtos;
      this.servicos = estoque.servicos;
    })
  }
  buscarClientes(){
    this.clienteService.listar().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    })
  }

  handleProducts(produtos: Produto){
    console.log(produtos)

  }

  handleServices(servico: Servico){
    if(this.teste.includes(servico)){
      let index = this.teste.indexOf(servico);
      this.teste.splice(index, 1)
    }
    this.teste.push(servico)
  }

  handleClients(cliente: Cliente){
    console.log(cliente)
  }

  onSubmit(){
    // console.log(this.venda.value.servicos)
    console.log(this.venda.value.produtos)
  }

}
