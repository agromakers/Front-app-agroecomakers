import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { GeneralService } from 'src/app/services/general.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { RolesService } from 'src/app/services/roles.service';
import { UsuarioRolService } from 'src/app/services/usuario-rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VeredaService } from 'src/app/services/vereda.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {

  token: any;
  user_id: [];
  rol_id: string
  prueba :{}={};
  usuario: any;
  productor: any;
  transportador: any;
  consumidor: any;
  
  private _storage: Storage | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private generalService : GeneralService,
    private rolService: RolesService,
    private userRolService: UsuarioRolService,
    private usuarioService: UsuarioService,
    private storage: Storage,
  ) {
    this.init();
  }

  ngOnInit() {      
    this.recuperarId();      
  }

  async recuperarId(){
    this.token = await this.storage.get('tokenUser') || [];
    this.user_id = await this.storage.get('id_user') || [];
    console.log(this.token); 
    console.log(this.user_id)
  } 

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  
  ngAfterContentChecked(){
    //console.log('depto', this.departamento);
    
  }

  crearRelaciones(){
    this.productor = document.getElementById('productor');
    this.transportador = document.getElementById('transportador');
    this.consumidor = document.getElementById('consumidor');
    if(this.productor.checked){
      console.log('productor seleccionado');      
      this.mostrarFinca();
    }
    if(this.transportador.checked){
      console.log('transportador seleccionado');
      this.mostrarTransporte();
    }
    if(this.consumidor.checked){
      console.log('consumidor seleccionado');
      //this.mostrarConsumidor();
    }
    if(!this.productor.checked && !this.transportador.checked && !this.consumidor.checked){
      this.generalService.presentAlert('Atención', 'Debe seleccionar un rol para continuar')
      console.log('error');      
    }
  }

  async mostrarFinca(){
    let data: any;
    let data1: any;
    await this.rolService.listarRol().subscribe(resp=>{
      console.log(resp);      
      this.rol_id = resp[0]._id; 
      console.log(this.rol_id);
       
      data = {
        id_rol: this.rol_id,
      } 
      data1={
        _id : this.user_id,
      }
      this.usuarioService.editarRolUsuario(data, this.token ).subscribe(resp=>{
        if(resp == 'Token no es correcto'){
          console.log('Error en el token');
        }else{
          this.storage.set('tokenUser',resp);
          this.usuarioService.listarUsuario(data1).subscribe(resp=>{
            console.log('usuario relacionado', Object.values(resp));
          }) 
        }                  
      });
         
    this.router.navigateByUrl(`/productor`);
    })
  }

  async mostrarTransporte(){
    let data: any;
    let data1: any;
    await this.rolService.listarRol().subscribe(resp=>{      
      this.rol_id = resp[1]._id;  
      data = {
        id_usuario: this.user_id,
        id_rol: this.rol_id,
      } 
      data1={
        _id : this.user_id,
      }
      console.log('data', data);
      this.usuarioService.editarRolUsuario(data, this.token).subscribe(resp=>{
        console.log('Aqui', resp);
        this.storage.set('tokenUser',resp)          
      });
      this.usuarioService.listarUsuario(data1).subscribe(resp=>{
        console.log('usuario relacionado', Object.values(resp));
      })
    })    
    //this.router.navigateByUrl(`/transportador/registro-transporte`);    
  }

  mostrarConsumidor(){
    this.router.navigateByUrl(`/consumidor/${this.token}`);
  }

  mostrarEvaluacion(){
    this.router.navigateByUrl(`/evaluador/${this.token}`); 
  }


}
