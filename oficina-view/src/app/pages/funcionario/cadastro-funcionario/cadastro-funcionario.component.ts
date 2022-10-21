import { Funcionario } from './../../../interfaces/funcionario';
import { FuncionariosService } from './../../../services/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  idFuncionario = 0;

  funcionario = this.formBuilder.group({
    nome:['', Validators.required],
    cpf:['', Validators.required],
    contato:['', Validators.required],
    email:['', Validators.email],
    endereco:['', Validators.required],
    salario:[0, Validators.required]
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private funcionarioService: FuncionariosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idFuncionario = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.buscaPorId(this.idFuncionario).subscribe((funcionario: Funcionario) => {
      this.funcionario.setValue({
        nome: funcionario.nome,
        cpf: funcionario.cpf,
        contato: funcionario.contato,
        email: funcionario.email,
        endereco: funcionario.endereco,
        salario: funcionario.salario
      })
    })
  }

  cadastrar(){
    const funcionario = this.funcionario.value as Funcionario;
    const id = this.idFuncionario;

    if(id != 0){
      funcionario.id = id;
      this.funcionarioService.editar(id, funcionario).subscribe();
    }
    this.funcionarioService.salvar(funcionario).subscribe();

  }
}
