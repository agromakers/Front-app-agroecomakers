import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class AguaService {

  constructor(
    private http: HttpClient,
  ) { }

  listarOrigenAgua(){
    return this.http.get(`${URL}/origen_agua`);
  }

  listarAlmacenamientoAgua(){
    return this.http.get(`${URL}/almacenamiento_agua`);
  }

  listarRiegoAgua(){
    return this.http.get(`${URL}/riego_agua`);
  }

  listarControlAgua(){
    return this.http.get(`${URL}/control_agua`);
  }

  listarTerrazasAgua(){
    return this.http.get(`${URL}/terrazas_agua`);
  }

  listarResiduosAgua(){
    return this.http.get(`${URL}/residuos_agua`);
  }

  listarAccesoEntrega(){
    return this.http.get(`${URL}/acceso_entrega`);
  }

}
