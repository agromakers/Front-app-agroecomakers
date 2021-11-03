import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UnidadesFuncionalesService } from 'src/app/services/unidades-funcionales.service';
import { EmergentePage } from '../../emergente/emergente.page';

@Component({
  selector: 'app-registro-unidad-agricola',
  templateUrl: './registro-unidad-agricola.page.html',
  styleUrls: ['./registro-unidad-agricola.page.scss'],
})
export class RegistroUnidadAgricolaPage implements OnInit {

  listaTipoUF: any;
  listaPracticaUF: any;
  listaPendienteUF: any;
  listaHumedadUF: any;
  activaOrganica: boolean = false;
  activaMos: boolean = false;
  activaPH: boolean = false;
  menorque: any = '<';
  mayorque: any = '>';

  formRegistro:any= FormGroup;

  get nombre_unidadF(){
    return this.formRegistro.get('nombre_unidadF');
  }
  get tipo_unidad_agricola(){
    return this.formRegistro.get('tipo_unidad_agricola');
  }    
  get actividad_desarrollada(){
    return this.formRegistro.get('actividad_desarrollada');
  }
  get area_superficie(){
    return this.formRegistro.get('area_superficie');
  }

  public errorMensaje = {  
    actividad_desarrollada:[
      {type:'required', message: 'La actividad desarrollada es requerida.'},
    ],
    nombre_unidadF:[
      {type:'required', message: 'El nombre de unidad Funcional es requerido.'},
    ], 
    tipo_unidad_agricola:[
      {type:'required', message: 'El tipo de unidad agricola es requerido.'},
    ],
    area_superficie:[
      {type:'required', message: 'Se requiere una area o superficie.'},
    ],          
  }

  constructor(
    private unidadFuncionalService: UnidadesFuncionalesService,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private router: Router
  ) { 
    this.crearFormulario();
  }

  ngOnInit() {
    this.listarUF();
  }

  listarUF(){
    this.unidadFuncionalService.listarTipoUnidadAgricola().subscribe(resp=>{
      console.log(resp);
      this.listaTipoUF = resp;      
    });

    this.unidadFuncionalService.listarPracticasAgricolas().subscribe(resp=>{
      console.log(resp);
      this.listaPracticaUF = resp;      
    });

    this.unidadFuncionalService.listarPendienteTerreno().subscribe(resp=>{
      console.log(resp);
      this.listaPendienteUF = resp;      
    });

    this.unidadFuncionalService.listarHumedadSuelo().subscribe(resp=>{
      console.log(resp);
      this.listaHumedadUF = resp;      
    })
  }

  crearFormulario(){
    this.formRegistro = new FormGroup({
      actividad_desarrollada: new FormControl(),
      nombre_unidadF: new FormControl(), 
      tipo_unidad_agricola: new FormControl(),
      area_superficie: new FormControl(),
      practicas_agricolas: new FormControl(),
      pendiente_terreno: new FormControl(),  
      profundidad_suelo: new FormControl(),
      humedad_suelo: new FormControl(),
      foto_lote: new FormControl(),
      foto_suelo: new FormControl(),
      conoce_porcentaje: new FormControl(), 
      arcilla: new FormControl(),
      limo: new FormControl(),
      arena: new FormControl(),
      porcentaje_mos: new FormControl(),
      metodo_ph: new FormControl(),
      ph_terreno: new FormControl(),
    });
    this.formRegistro = this.fb.group({
      actividad_desarrollada: ['',[Validators.required]],
      nombre_unidadF: ['',[Validators.required]], 
      tipo_unidad_agricola: ['',[Validators.required]],
      area_superficie: ['',[Validators.required]],
      practicas_agricolas: [''],
      pendiente_terreno: [''],  
      profundidad_suelo: [''],
      humedad_suelo: [''],
      foto_lote: [''],
      foto_suelo: [''],
      conoce_porcentaje: [''], 
      arcilla: [''],
      limo: [''],
      arena: [''],
      porcentaje_mos: [''],
      metodo_ph: [''],
      ph_terreno: [''],
    });    
  } 
  
  conoceArcilla(evt){
    console.log(evt);
    if(evt == 'Si'){
      this.activaOrganica = true
    }else{
      this.activaOrganica = false
    }
  }

  conoceMos(evt){
    console.log(evt);
    if(evt == 'Si'){
      this.activaMos = true
    }else{
      this.activaMos = false
    }
  }

  conocePH(evt){
    console.log(evt);
    if(evt == 'Si'){
      this.activaPH = true
    }else{
      this.activaPH = false
    }
  }

  async mostrarModalEmergente1(){
    const modal = await this.modalCtrl.create({
      component: EmergentePage,
      componentProps:{
        'mensaje':'Foto del suelo de 0 hasta 40 cm: Por favor hacer un hueco en el suelo de 40 cm de profundidad hasta que se terminen las racies pequeñas, con un metro tome la medida, para confirmar la profundiad. Tome la foto donde se vean todas las partes anteriormente descritas ( hueco, raices y metro con profundiad de 40cm)',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Indicaciones para la toma de foto',
      },
      cssClass: 'my-custom-class-emergente',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  async mostrarModalEmergente2(){
    const modal = await this.modalCtrl.create({
      component: EmergentePage,
      componentProps:{
        'mensaje':'Aún hace falta configuarar las ayudas graficas dentro de esta ventana',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Ayuda muestreo suelo',
      },
      cssClass: 'my-custom-class-emergente',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  async mostrarModalEmergente3(){
    const modal = await this.modalCtrl.create({
      component: EmergentePage,
      componentProps:{
        'mensaje':'Aún hace falta configuarar las ayudas graficas dentro de esta ventana',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Indicaciones para método casero',
      },
      cssClass: 'my-custom-class-emergente',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }
  guardar(){
    this.router.navigateByUrl('/productor')
  }
}
