import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/usuario-interface';
import { Storage } from '@ionic/storage';
import { FincaInterface } from '../interfaces/finca-interface';


const URL = 'http://localhost:3000';
 

@Injectable({
  providedIn: 'root'
})
export class UnidadProductivaService {

  x_token :any;
  private _storage: Storage | null = null;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    
  ) {
    this.init();
    this.obtenerHeader();
   }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async obtenerHeader(){
    this.x_token = await this.storage.get('tokenUser');
  }

    listarFincas(){
      return this.http.get(`${URL}/finca`);
    }

    crearFinca(finca: FincaInterface){
      return this.http.put(`${URL}/finca/create`, finca);
    }

    editarFinca(finca: FincaInterface, token: string){
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'x_token': token});
      return this.http.post(`${URL}/finca/update/`, finca, { headers: headers});
    }

    editarUFuncionalFinca(id_lote: string, token: string){      
      console.log(id_lote);
      console.log(token);     
            
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'x_token': token});
      return this.http.post(`${URL}/userGeneral/updateRol/`, id_lote, { headers: headers});
    }

}

