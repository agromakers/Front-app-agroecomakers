import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class FrecuenciasService {

  constructor(
    private http: HttpClient,
  ) { }

  listarFrecuencias(){
    return this.http.get(`${URL}/frecuencia`);
  }
}
