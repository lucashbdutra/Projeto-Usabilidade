import { Component, OnInit } from '@angular/core';
import { Estoque } from 'src/app/interfaces/estoque';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  estoque?: Estoque;

  constructor(
    private estoqueService: EstoqueService
  ) { }

  ngOnInit(): void {
    this.estoqueService.listar().subscribe((estoque: Estoque) => {
      this.estoque = estoque;
    })
  }

}
