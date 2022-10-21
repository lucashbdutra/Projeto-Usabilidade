import { FuncionariosService } from './../../../services/funcionarios.service';
import { Funcionario } from './../../../interfaces/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionariosService
  ) { }

  ngOnInit(): void {
    this.funcionarioService.listar().subscribe((funcionarios: Funcionario[])=>{
      this.funcionarios = funcionarios;
    })
  }

  onExcluir(id: number){
    this.funcionarioService.deletar(id).subscribe();
  }

}
