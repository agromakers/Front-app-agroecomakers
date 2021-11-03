import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient,
  ) { }

  listarRol(){
    return this.http.get(`${URL}/rol/listar`);
  }

  crearRol(Rol: any){
    return this.http.post(`${URL}/rol/create`, Rol);
  }

  /* editarRol(id: string){
    return this.http.post(`${URL}/rol/update`, id);
  } */
}
