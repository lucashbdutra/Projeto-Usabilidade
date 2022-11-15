import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Venda } from '../interfaces/venda';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  endpoint = 'vendas';
  api = environment.api;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  realizarVenda(venda: Partial<Venda>){
    return this.http.post<Venda>(`${this.api}/${this.endpoint}/realizarVenda`, venda, this.loginService.getOptions());
  }
}
