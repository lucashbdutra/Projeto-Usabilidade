import { ServicosService } from './../../../services/servicos.service';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/interfaces/servico';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './cadastro-servicos.component.html',
  styleUrls: ['./cadastro-servicos.component.css']
})
export class CadastroServicosComponent implements OnInit {

  idServico = 0;

  servico = this.formBuilder.group({
    nome:['', Validators.required],
    valor:[0, Validators.required],
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private servicoService: ServicosService,
    private toaster: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idServico = Number(this.route.snapshot.paramMap.get('id'));

    if(this.idServico!=0){
      this.servicoService.buscaPorId(this.idServico).subscribe((servico: Servico) => {
        this.servico.setValue({
          nome: servico.nome,
          valor: servico.valor
        })
      })
    }
  }

  cadastrar(){
    const servico = this.servico.value as Servico;
    servico.disponivel = true;
    const id = this.idServico;

    if(id != 0){
      servico.id = id;
      this.servicoService.editar(id, servico).subscribe( () => {
        this.toaster.success('Edição realizada com sucesso!', '', {
          timeOut: 3000,
        });
        this.router.navigate(['/servicos']);
      } , (erro) => {
        this.toaster.error('Houve um problema com sua solicitação!', '', {
          timeOut: 2000,
        });
      }
      );
    }

    this.servicoService.salvar(servico).subscribe(() => {
      this.toaster.success('Cadastro realizado com sucesso!', '', {
        timeOut: 3000,
      });
      this.router.navigate(['/servicos']);
    }, (erro) => {
      this.toaster.error('Houve um problema com sua solicitação!', '', {
        timeOut: 2000,
      });
    }
    );

  }
}
