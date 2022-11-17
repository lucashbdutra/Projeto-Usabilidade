import { Router, ActivatedRoute } from '@angular/router';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { GastosMensaisService } from './../../../services/gastos-mensais.service';
import { Gastos } from './../../../interfaces/gastos';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gastos-mensais',
  templateUrl: './gastos-mensais.component.html',
  styleUrls: ['./gastos-mensais.component.css']
})
export class GastosMensaisComponent implements OnInit {

  constructor(
    private gastosService: GastosMensaisService,
    private toaster: ToastrService,
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  gastos = this.formBuilder.group({
    agua: [0, Validators.required],
    energia: [0, Validators.required],
    internet: [0, Validators.required],
    mes: [0, Validators.required],
  })

  fechamento?: Gastos;

  calcular(){
    const gastosMensais = this.gastos.value as Partial<Gastos>;
    this.gastosService.calcularGastos(gastosMensais).subscribe((gastos: Gastos) => {
      if(gastos){
        this.fechamento = gastos;
      }
    })
  }

  salvar(){
    const fechamento = this.fechamento as Gastos;
    this.gastosService.gerarFechamento(fechamento).subscribe((gastos: Gastos) => {
      if(gastos){
        this.toaster.success('Fechamento realizado com sucesso!', '', {
          timeOut: 3000,
        });

        this.router.navigate(['relatorio'], {relativeTo: this.route})
      }
    }, (erro) => {
      this.toaster.error('Houve um problema com sua solicitação!', '', {
        timeOut: 2000,
      });
    })
  }

  back(){
    delete this.fechamento;
  }

  lucro(){
    const lucro = Number(this.fechamento?.lucro)
    return lucro >= 0? true: false;

  }

}
