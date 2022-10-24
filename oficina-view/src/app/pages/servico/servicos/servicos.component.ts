import { ServicosService } from './../../../services/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/interfaces/servico';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos?: Servico[];

  constructor(
    private servicoService: ServicosService,
    private bsModalService: BsModalService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.servicoService.listar().subscribe((servico: Servico[])=>{
      this.servicos = servico;
    })
  }

  openModalComponent(
    idServico?: number,
  ) {
    const initialStateDeletar = {
      idServico
    };


    this.modalRef = this.bsModalService.show(ConfirmModalComponent, {
      initialState: initialStateDeletar,
      class: 'my-modal',
    });

  }

}
