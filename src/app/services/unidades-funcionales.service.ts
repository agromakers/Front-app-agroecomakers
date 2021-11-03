import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class UnidadesFuncionalesService {

  constructor(
    private http: HttpClient,
  ) { }

  listarUnidadesFuncionales(){
    return this.http.get(`${URL}/unidad_funcional`);
  }

  listarTipoUnidadAgricola(){
    return this.http.get(`${URL}/tipo_unidad_agricola`);
  }

  listarPracticasAgricolas(){
    return this.http.get(`${URL}/practicas_agricolas`);
  }

  listarPendienteTerreno(){
    return this.http.get(`${URL}/pendiente_terreno`);
  }

  listarHumedadSuelo(){
    return this.http.get(`${URL}/humedad_suelo`);
  }

}
