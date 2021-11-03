import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { RolesService } from 'src/app/services/roles.service';
import { UsuarioRolService } from 'src/app/services/usuario-rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';
//import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit{

  token: string;
  user_id: string;
  rol_id: string
  prueba :{}={};
  usuario: any;
  //private _storage: Storage | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private generalService : GeneralService,
    private rolService: RolesService,
    private userRolService: UsuarioRolService,
    private usuarioService: UsuarioService
    //private storage: Storage,
  ) {
    //this.init();
  }

  ngOnInit() {
    this.rolService.listarRol().subscribe(resp=>{
      this.rol_id = resp[0]._id;    
    })
    
    this.token = localStorage.getItem('token');
    this.user_id = localStorage.getItem('id_user');
    console.log(this.token); 
    console.log(this.user_id)  
  }
 

  /* async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  } */
  
  
 
  mostrarFinca(){
    let data ={
      id_usuario: this.user_id,
      id_rol: this.rol_id
    }
    // this.userRolService.listarRelacionRol(data).subscribe(resp=>{
    //   console.log(resp);
    //   //let idRelacion = resp._id
      
    // })
    // this.userRolService.crearRelacionRol(data).subscribe(resp=>{
    //   console.log(Object(resp[0]._id) );      
    // })
    this.router.navigateByUrl(`productor`);
  }

  mostrarTransporte(){
    let data ={
      id_usuario: this.user_id,
      id_rol: this.rol_id
    }
    /* this.userRolService.listarRelacionRol(data).subscribe(resp=>{
      console.log(resp);      
    }) */
    //this.router.navigateByUrl(`/transportador/${this.token}`);    
  }

  mostrarLocal(){
    this.router.navigateByUrl(`/consumidor/${this.token}`);
  }

  mostrarEvaluacion(){
    this.router.navigateByUrl(`/evaluador/${this.token}`); 
  }

}