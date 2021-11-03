import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class VeredaService {

  constructor(
    private http: HttpClient,
  ) { }

  listarVeredas(data : any ){
    return this.http.post(`${URL}/vereda/`, data);
  }
}

