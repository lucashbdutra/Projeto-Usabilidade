import { ProdutosService } from './../../services/produtos.service';
import { FuncionariosService } from './../../services/funcionarios.service';
import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/interfaces/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  idCliente:     number = 0;
  idFuncionario: number = 0;
  idProduto:     number = 0;
  idServico:     number = 0;

  tipo: string = 'home';


  constructor(
    private modalRef: BsModalRef,
    private clientesService: ClientesService,
    private funcionarioService: FuncionariosService,
    private produtoService: ProdutosService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }


  deletar() {
    if(this.idCliente!=0){
    this.clientesService.deletar(this.idCliente).subscribe(
      (cliente) => {
        this.tipo = 'clientes';
        this.fecharModal();
      },
      (error) => {
        console.log(error)
      }
    )

    }
    if(this.idFuncionario!=0){
      this.funcionarioService.deletar(this.idFuncionario).subscribe(
        (funcionario) => {
          this.tipo = 'funcionarios';
          this.fecharModal();
        },
        (error) => {
          console.log(error)
        }
      )
    }
    if(this.idProduto!=0){
      this.produtoService.deletar(this.idProduto).subscribe(
        (produto) => {
          this.tipo = 'produtos';
          this.fecharModal();
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  fecharModal() {

    this.modalRef.hide();
    window.location.href = `http://localhost:4200/${this.tipo}`;
  }

}
