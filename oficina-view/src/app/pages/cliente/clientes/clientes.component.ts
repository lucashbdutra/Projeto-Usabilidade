import { ConfirmModalComponent } from './../../../components/confirm-modal/confirm-modal.component';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TiposMetodos } from 'src/app/enums/tipos-metodos';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  p: number = 1;
  clientes: Cliente[] = [];
  backup: Cliente[] = [];

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private route: ActivatedRoute,
    private bsModalService: BsModalService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clienteService.listar().subscribe((clientes: Cliente[])=>{
      this.clientes = clientes;
      this.backup = clientes;
    })
  }

  openModalComponent(
    idCliente?: number,
  ) {
    const initialStateDeletar = {
      idCliente
    };


    this.modalRef = this.bsModalService.show(ConfirmModalComponent, {
      initialState: initialStateDeletar,
      class: 'my-modal',
    });

  }

  search(event: Event){
    const target = event.target as HTMLInputElement
    const value = target.value
    this.clientes = this.backup.filter((cliente) => {
      return cliente.nome.toLowerCase().includes(value);
    })
  }
}
