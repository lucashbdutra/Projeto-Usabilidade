import { ProdutosService } from './../../../services/produtos.service';
import { Produto } from './../../../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos?: Produto[];

  constructor(
    private produtoService: ProdutosService,
    private bsModalService: BsModalService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe((produtos: Produto[])=>{
      this.produtos = produtos;
    })
  }

  openModalComponent(
    idProduto?: number,
  ) {
    const initialStateDeletar = {
      idProduto
    };


    this.modalRef = this.bsModalService.show(ConfirmModalComponent, {
      initialState: initialStateDeletar,
      class: 'my-modal',
    });

  }

}
