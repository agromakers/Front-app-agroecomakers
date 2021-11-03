import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';
import { PaisService } from 'src/app/services/pais.service';
import { FrecuenciasService } from 'src/app/services/frecuencias.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro:any= FormGroup;
  resultado: any;
  listaPais: string[];
  listaFrecuencia: string[];
  test: any;
  passwordType : string = 'password';
  passwordFlag : boolean = false;

  private _storage: Storage | null = null;

  get email(){
    return this.formRegistro.get('email');
  }
  get password(){
    return this.formRegistro.get('password');
  }    
  get telefono(){
    return this.formRegistro.get('telefono');
  }
  get nombre(){
    return this.formRegistro.get('nombre');
  }
  get pais(){
    return this.formRegistro.get('pais');
  }
  get frecuencia(){
    return this.formRegistro.get('frecuencia');
  }
  get identificacion(){
    return this.formRegistro.get('identificacion');
  }

  public errorMensaje = {  
    email:[
      {type:'required', message: 'El correo electrónico es requerido.'},
      {type:'pattern', message: 'Por favor ingrese un correo electrónico valido.' }
    ],
    password:[
      {type:'required', message: 'El password es requerido.'},
      {type:'minlength', message: 'El password debe tener mas de 6 caracteres.' }
    ], 
    nombre:[
      {type:'required', message: 'El nombre es requerido.'},
      {type:'minlength', message: 'El nombre debe tener mas de 2 caracteres.' }
    ],
    identificacion:[
      {type:'required', message: 'La identificación es requerido.'},
    ],
    telefono:[
      {type:'required', message: 'El telefono es requerido.'},
      {type:'minlength', message: 'El telefono debe tener 10 números.' },
      {type:'maxlength', message: 'El telefono debe tener 10 números.' }
    ],
    pais:[
      {type:'required', message: 'Se requiere un pais.'},
    ],
    frecuencia:[
      {type:'required', message: 'Se requiere una frecuencia.'},
    ],       
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService : UsuarioService,
    private generalService : GeneralService,
    private paisService: PaisService,
    private frecuenciaService: FrecuenciasService,
    private storage: Storage,    
  ) {
    this.crearFormulario();
    this.init();
  }

  ngOnInit() {
    this.paisService.listarPaises().subscribe(resp=>{
      this.listaPais = Object.values(resp);
    })
    this.listarFrecuencias();        
  }

  changeType(){
    if(this.passwordFlag){
      this.passwordFlag = false;
      this.passwordType = 'password';
    }else{
      this.passwordFlag = true;
      this.passwordType = 'text';
    }
  } 

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  } 

  crearFormulario(){
    this.formRegistro = this.fb.group({
      password: ['',[Validators.required, Validators.minLength(6)]],
      //email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],  
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],     
      pais: ['', Validators.required],
      identificacion: ['', Validators.required],
      frecuencia: ['', Validators.required],     
    });    
  }  

  listarFrecuencias(){
    this.frecuenciaService.listarFrecuencias().subscribe(resp=>{
      this.listaFrecuencia = Object.values(resp);            
    })
  }

  guardar(){ 
    /* const user={ name: 'Juan perez', email: 'julios116@gmail.com', telefono:'3213454545'} 
    this.generalService.sendObjectSource(user);
    this.router.navigateByUrl(`/dashboard`); */
    if(!this.formRegistro.valid){
      this.formRegistro.markAllAsTouched();
      return;
    }
    this.usuarioService.crearUsuario(this.formRegistro.value).subscribe(resp=>{
      this.resultado = Object.values(resp);
      if(this.resultado[0] != false){
        //this.generalService.sendObjectSource(this.resultado);
        this.generalService.guardarToken(this.resultado[0], 'tokenUser');
        this.storage.set('id_user', this.resultado[1]);          
        this.generalService.estaAutenticado();
        this.router.navigateByUrl(`/roles`);
        this.generalService.presentAlert('Bienvenido', 'Registro creado exitosamente');                    
      } else{
        this.generalService.presentAlert('error', 'Verifique la identificación y/o número telefonico');
      }          
    }, err=>{
      console.log();        
    });
  }
}
