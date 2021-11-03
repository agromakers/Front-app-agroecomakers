import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/usuario-interface';
import { Storage } from '@ionic/storage';


const URL = 'http://localhost:3000';
 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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

    listarUsuarios(){
      return this.http.get(`${URL}/userGeneral`);
    }
    listarUsuario(data){      
      return this.http.post(`${URL}/userGeneral/usuario`, data);
    }

    loginUsuario(data){
      return this.http.post(`${URL}/userGeneral/login`, data);
    }

    crearUsuario(usuario: UsuarioInterface){
      return this.http.put(`${URL}/userGeneral/create`, usuario);
    }

    editarRolUsuario(id_rol: string, token: string){
      
      console.log(id_rol);
      console.log(token);     
            
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'x_token': token});
      return this.http.post(`${URL}/userGeneral/updateRol/`, id_rol, { headers: headers});
    }

    editarFincaUsuario(id_finca: string, token: string){
      const headers = new HttpHeaders({'Content-Type': 'application/json', 'x_token': token});
      return this.http.post(`${URL}/userGeneral/updateFinca/`, id_finca, { headers: headers});
    }

}

