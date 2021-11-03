import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private http: HttpClient,
  ) { }

  listarPaises(){
    return this.http.get(`${URL}/pais`);
  }
}
