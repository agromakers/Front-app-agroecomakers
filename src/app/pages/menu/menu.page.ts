import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UsuarioRolService } from 'src/app/services/usuario-rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user_id: any;
  usuario: any;
  aux: number= 1;
  rol: any;
  listaRol: any;

  private _storage: Storage | null = null;

  constructor(
    private router: Router,
    private storage: Storage,
    private usuarioService : UsuarioService,
    private userRolService: UsuarioRolService,
  ) { }

  ngOnInit() {
    this.cargaId();
    
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async cargaId(){
    this.user_id = await this.storage.get('id_user') || [];
    console.log(this.user_id);
    this.cargarUsuario();
  }

  async cargarUsuario(){  
    let data ={
      _id: this.user_id
    } 
    this.usuario=[];
    if(this.user_id != undefined && this.aux == 1){
      await this.usuarioService.listarUsuario(data).subscribe(resp=>{
        console.log(resp);
        this.usuario = resp;       
        this.aux = 2;      
      });
    }    
  }

 
  async salir(){
    await this.storage.clear();
    await localStorage.clear();
    await this.router.navigateByUrl(`/login`);
    //navigator["app"].exitApp();  
  }
}
