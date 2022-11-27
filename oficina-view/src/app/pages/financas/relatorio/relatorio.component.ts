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
  backup: Gastos[] = [];

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
        this.backup = gastos;
      }
    })
  }
  lucro(lucro: number){
    return lucro >= 0? true: false;

  }

  search(event: Event){
    const target = event.target as HTMLInputElement
    const value = target.value
    this.gastos = this.backup.filter((gasto) => {
      return gasto.data.toLowerCase().includes(value);
    })
  }

}
