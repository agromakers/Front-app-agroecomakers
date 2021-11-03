import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(
    private http: HttpClient,
  ) { }

  listarMunicipios(data: any){
    console.log(
      data
    );
    
    return this.http.post(`${URL}/municipio/`, data);
  }
}

