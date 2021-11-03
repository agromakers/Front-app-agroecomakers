import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmergentePage } from '../../emergente/emergente.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from 'src/app/services/photo.service';
import { GeneralService } from 'src/app/services/general.service';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


declare var window: any;
@Component({
  selector: 'app-registro-biodiversidad',
  templateUrl: './registro-biodiversidad.page.html',
  styleUrls: ['./registro-biodiversidad.page.scss'],
})
export class RegistroBiodiversidadPage implements OnInit {
  
  foto: any;
  tokenUP: any;
  formBiodivesidad: any= FormGroup;
  resultado: any;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private camera: Camera,
    public photoService: PhotoService,
    private generalService: GeneralService,
    private unidadProductiva: UnidadProductivaService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.recuperarId();
    this.crearFormulario();
    await this.photoService.loadSaved();
    this.foto = this.photoService.photos;
    console.log(this.foto);    
  }

  async recuperarId(){
    this.generalService.recuperarStorage('tokenUP').then(resp=>{
      this.tokenUP = resp;
      console.log(this.tokenUP);
    });
  }

  camara(){
    this.photoService.addNewToGallery();
  }

  crearFormulario(){
    this.formBiodivesidad = new FormGroup({
      diversidad_insectos : new FormControl(),
      color_insectos : new FormControl(),
      peso_insectos : new FormControl(),
      trampa_insectos : new FormControl(),
    });
    this.formBiodivesidad = this.fb.group({
      diversidad_insectos : [''],
      color_insectos : [''],
      peso_insectos : [''],
      trampa_insectos : [''],
    });    
  } 

  async mostrarModalEmergente(){
    const modal = await this.modalCtrl.create({
      component: EmergentePage,
      componentProps:{
        'mensaje':'En una sábana blanca, iluminada con luz blanca, de un equivalente de 75W tomar la foto a las 9:00 p.m., en una zona abierta m{as alta durante una noche sin luna.',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Indicaciones para la toma de foto',
      },
      cssClass: 'my-custom-class-emergente',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  async mostrarModalEmergente1(){
    const modal = await this.modalCtrl.create({
      component: EmergentePage,
      componentProps:{
        'mensaje':'Trampa amarilla: (2) platos amarillos profundos (donde comen salchipapa). Un palo. Plato(1) amarrado al palo. Plato (2) encima. Agua con jabón de cocina sin olor, a la mitad del nievl del plato 2. Dejar 24 horas. Tomar la foto. Evaluar el número de insectos en la foto.',
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
        'mensaje':'Trampa de caida: coger un plato de polietileno o de cartón, 4 pinchos, dos vasos grandes de plastico u otro recipiente, con diámetro aproximado de 10 cm., llenarlo hasta la mitad de agua con jabón. Recojer 2 horas depués el contenido vaciarlo encima de un pliego, una hoja grande o una toalla blanca. Tomar la foto',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Indicaciones',
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
        'mensaje':'Trampa de luz: Cojer una sábana, iluminada por un bombillo de 75W equivalente de luz blanca, esperar a las 9:30 p.m. Tomar la foto de un tramo de (1) metro de largo. Colectar los 4 insectos más bonitos y subir sus fotos.',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Indicaciones',
      },
      cssClass: 'my-custom-class-emergente',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  guardar(){
    let data: any;
    data = {
      diversidad_insectos : this.formBiodivesidad.value.diversidad_insectos,
      color_insectos :this.formBiodivesidad.value.color_insectos,
      peso_insectos : this.formBiodivesidad.value.peso_insectos,
      trampa_insectos : this.formBiodivesidad.value.trampa_insectos,      
    } 
    console.log('data', data);        
    this.unidadProductiva.editarFinca(data, this.tokenUP).subscribe(resp=>{
      this.resultado = Object.values(resp)
      console.log(this.resultado);
      this.generalService.guardarToken(this.resultado[0], 'tokenUP');
      this.router.navigateByUrl(`/productor`);
    })
  }


}
