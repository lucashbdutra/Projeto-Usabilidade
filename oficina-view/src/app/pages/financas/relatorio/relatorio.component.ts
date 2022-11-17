import { Gastos } from './../../../interfaces/gastos';
import { Component, OnInit } from '@angular/core';
import { GastosMensaisService } from 'src/app/services/gastos-mensais.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  gastos: Gastos[] = [];

  constructor(
    private gastosService: GastosMensaisService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.gastosService.listar().subscribe((gastos: Gastos[]) => {
      if(gastos){
        this.gastos = gastos;
      }
    })
  }
  lucro(lucro: number){
    return lucro >= 0? true: false;

  }

}
