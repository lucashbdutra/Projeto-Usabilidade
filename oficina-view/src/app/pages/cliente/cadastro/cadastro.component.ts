import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroClienteComponent implements OnInit {

  idCliente = 0;

  cliente = this.formBuilder.group({
    nome:['', Validators.required],
    cpf:['', Validators.required],
    contato:['', Validators.required],
    email:['', Validators.email],
    endereco:['', Validators.required]
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private clienteService: ClientesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idCliente = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.buscaPorId(this.idCliente).subscribe((cliente: Cliente) => {
      this.cliente.setValue({
        nome: cliente.nome,
        cpf: cliente.cpf,
        contato: cliente.contato,
        email: cliente.email,
        endereco: cliente.endereco
      })
    })
  }

  cadastrar(){
    const cliente = this.cliente.value as Cliente;
    const id = this.idCliente;

    if(id != 0){
      cliente.id = id;
      this.clienteService.editar(id, cliente).subscribe();
    }
    this.clienteService.salvar(cliente).subscribe();

  }


}
