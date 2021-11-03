import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { GeneralService } from 'src/app/services/general.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MyModalsPage } from '../../../my-modals/my-modals.page';
import { EmergentePage } from '../../emergente/emergente.page';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-registro-finca',
  templateUrl: './registro-finca.page.html',
  styleUrls: ['./registro-finca.page.scss'],
})
export class RegistroFincaPage implements OnInit, AfterContentInit {

  progreso = 0.005;
  formRegistro:any= FormGroup;
  resultado: any;
  listaPais : any;
  departamentos: any;
  departamentoSel: any;
  municipios: any;
  municipioSel: any;
  tokenUser: any; 

  get nombre_finca(){
    return this.formRegistro.get('nombreFinca');
  }
  get departamento(){
    return this.formRegistro.get('departamento');
  }    
  get municipio(){
    return this.formRegistro.get('municipio');
  }
  get pais(){
    return this.formRegistro.get('pais');
  }

  public errorMensaje = {  
    nombre_finca:[
      {type:'required', message: 'El nombre es requerido.'},
    ],
    departamento:[
      {type:'required', message: 'El departamento es requerido.'},
    ], 
    municipio:[
      {type:'required', message: 'El municipio es requerido.'},
    ],
    pais:[
      {type:'required', message: 'Se requiere un pais.'},
    ],
          
  }
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private deptoService: DepartamentoService,
    private generalService: GeneralService,
    private municipioService: MunicipioService,
    private geoLocation: Geolocation,
    private unidadProductiva: UnidadProductivaService,
    private modalCtrl: ModalController,
    private usuarioService: UsuarioService,
    private paisService: PaisService
  ) {
    this.crearFormulario();   
   }

  ngOnInit() { 
    this.paisService.listarPaises().subscribe(resp=>{
      this.listaPais = Object.values(resp);
    })
    this.mostrarModal();
    this.recuperarId(); 
  }

  ngAfterContentInit(){
    this.mostrarModalEmergente();
  }

  async recuperarId(){
    this.generalService.recuperarStorage('tokenUser').then(resp=>{
      this.tokenUser = resp;
      console.log(this.tokenUser);
    })
    
  }

  async mostrarModalEmergente(){
    const modal = await this.modalCtrl.create({
      component: EmergentePage,
      componentProps:{
        'mensaje':'Llamaremos Unidad Productiva (UP) a la finca donde se presentan diferentes actividades. Recuerde que donde vea el icono de ayuda, este le brindara información en formato audio.',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Indicaciones',
      },
      cssClass: 'my-custom-class-emergente',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }
  
  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: MyModalsPage,
      componentProps:{
        'mensaje':'Recuerde que debe permitir que Agromakers acceda a la ubicación de este dispositivo estando en la finca.',
        'audio': 'assets/sound/chino_nacho.mp3',
      },
      cssClass: 'my-custom-class',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  crearFormulario(){
    this.formRegistro = new FormGroup({
      nombre_finca: new FormControl(),
      departamento: new FormControl(),  
      municipio: new FormControl(),
      /* vereda: new FormControl(), */
      latitud_finca: new FormControl(),
      longitud_finca: new FormControl(),
      pais: new FormControl(), 
      distancia_senal: new FormControl(),
    });
    this.formRegistro = this.fb.group({
      nombre_finca: ['',[Validators.required]],
      departamento: ['',[Validators.required]],  
      municipio: ['', [Validators.required]],
     /*  vereda: ['',[Validators.required]], */
      latitud_finca: ['',],
      longitud_finca: ['',],
      pais: ['', Validators.required], 
      distancia_senal: ['']
    });    
  } 

  productor() {
    this.router.navigateByUrl(`productor`);
  }

  getGeo(evt){
    console.log('evento', evt.detail.checked);
    if(!evt.detail.checked){
      this.formRegistro.value.latitud_finca= null;
      this.formRegistro.value.longitud_finca= null;
      console.log('coordenadas', this.formRegistro.value.latitud_finca);
      console.log('coordenadas', this.formRegistro.value.longitud_finca); 
    }else{
      this.geoLocation.getCurrentPosition().then((resp) => {
        /* resp.coords.latitude
        resp.coords.longitude */
        this.formRegistro.value.latitud_finca= resp.coords.latitude;
        this.formRegistro.value.longitud_finca= resp.coords.longitude;
        console.log('coordenadas', this.formRegistro.value.latitud_finca);
        console.log('coordenadas', this.formRegistro.value.longitud_finca);       
      }).catch((error) => {      
        console.log('Error getting location', error);
      });
      
      let watch = this.geoLocation.watchPosition();
      watch.subscribe((data) => {
        
        //data.coords.latitude
        //data.coords.longitude
      });
    }    
  } 

  capturaP(){
    let data ={
      pais: this.formRegistro.controls.pais.value,
    }
    this.deptoService.listarDepartamentos(data).subscribe(resp=>{
      console.log('departamentos', Object.values(resp));
      this.departamentos = Object.values(resp);      
    })
    console.log('depto', this.departamento);
  }
  
  capturaD(){
    let data ={
      departamento: this.formRegistro.controls.departamento.value,
      pais: this.formRegistro.controls.pais.value,
    }
    this.municipioService.listarMunicipios(data).subscribe(resp=>{
      console.log('municipios', Object.values(resp));
      this.municipios = Object.values(resp);      
    })
    console.log('depto', this.departamento);
  }

  capturaM(){
    let data ={
      municipio:  this.formRegistro.controls.municipio.value,
    }
  }

  guardar(){
    let data: any;
    console.log(this.formRegistro);
    if(!this.formRegistro.valid){
      this.formRegistro.markAllAsTouched();
      return;
    }
     
    this.unidadProductiva.crearFinca(this.formRegistro.value).subscribe(resp=>{
      this.resultado = Object.values(resp)
      console.log(this.resultado);
      this.generalService.guardarToken(this.resultado[0], 'tokenUP');
      data = {
        id_finca: this.resultado[1],
      }
      this.usuarioService.editarFincaUsuario(data, this.tokenUser).subscribe((resp: any)=>{
        console.log(resp); 
        this.generalService.guardarToken(resp, 'tokenUser');
        this.router.navigateByUrl(`/productor/registro-trabajadores`);       
      })
    })
  }





  /* capturaV(){
    console.log('vereda', this.vereda);
    console.log('municipio', this.municipio);
    console.log('Departamnento', this.departamento);
  } */  
}
