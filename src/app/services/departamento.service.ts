import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(
    private http: HttpClient,
  ) { }

  listarDepartamentos(data){
    return this.http.post(`${URL}/departamento`,data);
  }
}

