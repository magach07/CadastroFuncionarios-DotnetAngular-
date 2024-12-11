import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/GetAllFuncionario`;
  private apiUrlCreate = `${environment.ApiUrl}/CreateFuncionario`;
  private apiUrlUpdate = `${environment.ApiUrl}/UpdateFuncionario`;
  private apiUrlGetById = `${environment.ApiUrl}/GetFuncionarioById`;
  private apiUrlInactivate = `${environment.ApiUrl}/InactivateFuncionario`;
  private apiUrlDelete = `${environment.ApiUrl}/DeleteFuncionario`

  constructor( private http: HttpClient ) { }

  GetAllFuncionarios() : Observable<Response<Funcionario[]>>
  {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl)
  }

  CreateFuncionario(funcionario : Funcionario): Observable<Response<Funcionario[]>>
  {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrlCreate}`, funcionario);
  }

  UpdateFuncionario(funcionario : Funcionario): Observable<Response<Funcionario>>
  {
    return this.http.post<Response<Funcionario>>(`${this.apiUrlUpdate}`, funcionario);
  }

  GetFuncionarioById(id : number) : Observable<Response<Funcionario>>
  {
    return this.http.get<Response<Funcionario>>(`${this.apiUrlGetById}?id=${id}`);
  }

  InactivateFuncionario(id: number) : Observable<Response<Funcionario>>
  {
    return this.http.put<Response<Funcionario>>(`${this.apiUrlInactivate}?id=${id}`, {});
  }

  DeleteFuncionario(id: number) : Observable<Response<Funcionario[]>>
  {
    return this.http.delete<Response<Funcionario[]>>(`${this.apiUrlDelete}?id=${id}`, {});
  }
}