import { ClientesService } from 'src/app/services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.css']
})
export class SelectClientComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente?: Cliente;

  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit(): void {
    this.buscarClientes();
  }

  buscarClientes(){
    this.clienteService.listar().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    })
  }

  handleClients(cliente: Cliente){
    const client = cliente as Cliente;
    this.cliente = client;
  }


}
