
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes?: Cliente[];

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe((clientes: Cliente[])=>{
      this.clientes = clientes;
    })
  }

  onExcluir(id: number){
    this.clienteService.deletar(id).subscribe();
  }

}
