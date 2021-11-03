import { Component, OnInit, DoCheck, AfterContentChecked, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from './services/general.service';
import { UsuarioService } from './services/usuario.service';
import { RolesService } from './services/roles.service';
import { UsuarioRolService } from './services/usuario-rol.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  //, DoCheck, AfterContentChecked, AfterViewChecked 
  user_id: any;
  usuario: any;
  aux: number= 1;
  rol: any;
  listaRol: any;

  private _storage: Storage | null = null;

  constructor(
    private router: Router,
    private platform: Platform,
    private translateService : TranslateService,
    private usuarioService : UsuarioService,
    private generalService: GeneralService,
    private userRolService: UsuarioRolService,
    private storage: Storage,
  ) {
    //this.init();
    this.translateService.setDefaultLang("Español");
    this.translateService.addLangs(['Ingles', 'Español', 'Francés']);
    this.initializeApp();
        
  }

  ngOnInit(){
    this.recuperaId();    
  }

  async recuperaId(){
    /* this.user_id = await this.storage.get('id_user');
    console.log(this.user_id);    
    if(this.generalService.estaAutenticado){
      this.userRolService.listarRelacionRol().subscribe(resp=>{
        for(let user of Object.values(resp)){
          console.log(user.id_usuario);
          if(this.user_id === user.id_usuario){
            console.log('Coincide');
            
            this.router.navigateByUrl('/roles')
          }else{
            console.log('No coincide');            
            this.router.navigateByUrl('/roles')
          }          
        }        
      })
            
    }else{
      this.router.navigateByUrl('/roles')
    } */
  }

  /* async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  
  ngDoCheck(){
    //console.log('ngDocheck activado');
  }
 
  ngAfterContentChecked(){
    //console.log('ngAfterContentChecked activado');
    //this.user_id = localStorage.getItem('id_user');
    this.cargaId();
    this.cargarUsuario();
  }

  async cargaId(){
    this.user_id = await this.storage.get('id_user') || [];
  }
 
  ngAfterViewChecked(){
    //console.log('ngAfterViewChecked activado');
  }

  async cargarUsuario(){  
    let data ={
      _id: this.user_id
    } 
    this.usuario=[];
    if(this.user_id != undefined && this.aux == 1){
      await this.usuarioService.listarUsuario(data).subscribe(resp=>{
        //console.log(resp);
        this.usuario = resp;
        console.log(this.usuario._id);         
        this.aux = 2; 
        //this.cargarRoles();     
      });
    }    
  }

  cargarRoles(){
    this.userRolService.listarRelacionRol().subscribe(resp=>{      
      let dato = (Object.values(resp));     
      for(let item of dato){
        if(item.length != 0){
          for(let a = 0 ; a<item.length; a++){
            console.log(item[a].id_usuario);
            console.log(this.usuario._id);
            if(this.usuario._id == item[a].id_usuario){              
              console.log('aqui'); 
              this.listaRol = item[a].id_usuario;

            } else{
              console.log('no se crea relación');            
            }       
          }
        }else{
          this.userRolService.crearRelacionRol(data).subscribe(resp=>{
            console.log(Object(resp) ); 
            console.log('crea realación');                 
          })
        }                    
      }
    });
  }
 */
  initializeApp(){
    this.platform.ready().then(()=>{ }) 
  }

  salir(){
    localStorage.clear();
    this.storage.clear();
    this.router.navigateByUrl(`/login`);
    //navigator["app"].exitApp();  
  }

}
