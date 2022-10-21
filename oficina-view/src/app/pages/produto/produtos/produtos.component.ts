import { ProdutosService } from './../../../services/produtos.service';
import { Produto } from './../../../interfaces/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos?: Produto[];

  constructor(
    private produtoService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe((produtos: Produto[])=>{
      this.produtos = produtos;
    })
  }

  onExcluir(id: number){
    this.produtoService.deletar(id).subscribe();
  }

}
