import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class UsuarioRolService {

  constructor(
    private http: HttpClient,
  ) { }

  listarRelacionRol(){
    return this.http.get(`${URL}/userRol/listar`);
  }

  crearRelacionRol(data: any){
    return this.http.post(`${URL}/userRol/create`, data);
  }
}








  
  

