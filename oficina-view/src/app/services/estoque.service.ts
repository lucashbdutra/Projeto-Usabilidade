import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estoque } from '../interfaces/estoque';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  endpoint = 'estoque';
  api = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  listar(){
    return this.http.get<Estoque>(`${this.api}/${this.endpoint}/`);
  }
}
