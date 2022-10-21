import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Servico } from '../interfaces/servico';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  endpoint = 'servicos';
  api = environment.api;

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  listar(){
    return this.http.get<Servico[]>(`${this.api}/${this.endpoint}/`);
  }

  deletar(id: number){
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`, this.loginService.getOptions());
  }

  salvar(servico: Partial<Servico>){
    return this.http.post<Servico>(`${this.api}/${this.endpoint}/`, servico, this.loginService.getOptions());
  }

  editar(id: number, servico: Partial<Servico>){
    return this.http.put(`${this.api}/${this.endpoint}/${id}`, servico, this.loginService.getOptions());
  }

  buscaPorId(id: number){
    return this.http.get<Servico>(`${this.api}/${this.endpoint}/${id}`);
  }
}
