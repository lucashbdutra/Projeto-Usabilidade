import { ProdutosService } from './../../../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Venda } from '../../../interfaces/venda';
import { ClientesService } from 'src/app/services/clientes.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { Cliente } from 'src/app/interfaces/cliente';
import { VendasService } from 'src/app/services/vendas.service';
import { ALERT_MESSAGE } from 'src/app/enums/alert-message';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  venda = this.formBuilder.group({
    quantidade: [0, Validators.required]
  })

  produtos?: Produto[];
  idCliente = 0;

  produto?: Produto;
  cliente?: Cliente;
  vendas?: Venda;
  subtotal: number = 0;

  produtosList: Produto[] = [];

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private clienteService: ClientesService,
    private vendasService: VendasService,
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.idCliente = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarCliente();
    this.buscarProdutos();
  }

  condition(): boolean{
    if(Number(this.venda.value.quantidade) <= Number(this.produto?.quantidade)
    && Number(this.venda.value.quantidade) > 0){
      return false;
    }
    return true;
  }

  buscarCliente(){
    this.clienteService.buscaPorId(this.idCliente).subscribe((cliente: Cliente) => {
      this.cliente = cliente;
    })
  }

  buscarProdutos(){
    this.produtosService.listar().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    })
  }

  handleProducts(produto: Produto){
    this.produto = produto;

  }

  setList(tipo: string){

    let produto = this.produto as Produto;
    let produtoNew = Object.assign({}, produto) as Produto;
    produtoNew.quantidade = Number(this.venda.value.quantidade);

    if(!this.produtosList.includes(produto)){
      this.produtosList.push(produtoNew);
      this.venda.reset();
    }

  }

  calculo(){
    let valor = 0;
    for(let produto of this.produtosList){
      valor += produto.valorFinal * produto.quantidade;
    }
    this.subtotal = valor;
  }

  onSubmit(){
    const cliente = this.cliente as Cliente;
    let venda: Partial<Venda> = {};
    venda.cliente = cliente;
    venda.produtos = this.produtosList;
    this.vendasService.realizarVenda(venda).subscribe((venda: Venda) => {
      if(venda){
        this.vendas = venda;
        this.toaster.success('Venda realizada com sucesso!', '', {
          timeOut: 2000,
        });
      }
    }, (error) => {
      this.toaster.error(ALERT_MESSAGE.ERROR_SELL, '', {
        timeOut: 2000,
      });
    });

  }

}
