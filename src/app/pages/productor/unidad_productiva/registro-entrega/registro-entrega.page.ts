import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AguaService } from 'src/app/services/agua.service';
import { MyModalsPage } from '../../../my-modals/my-modals.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-entrega',
  templateUrl: './registro-entrega.page.html',
  styleUrls: ['./registro-entrega.page.scss'],
})
export class RegistroEntregaPage implements OnInit {

  acceso_entrega: any;
  latitud_entrega: any;
  longitud_entrega: any;
  acceso_punto_entrega: any;
  tokenUP: any;
  resultado: any;

  constructor( 
    private aguaService: AguaService,
    private modalCtrl: ModalController,
    private geoLocation: Geolocation,
    private unidadProductiva: UnidadProductivaService,
    private generalService: GeneralService,
    private router: Router
    ) { }

  ngOnInit() {
    this.recuperarId();
    this.mostrarModal();
    this.listarAccesoEntrega();
  }

  async recuperarId(){
    this.generalService.recuperarStorage('tokenUP').then(resp=>{
      this.tokenUP = resp;
      console.log(this.tokenUP);
    });
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: MyModalsPage,
      componentProps:{
        'mensaje':'Recuerde que debe permitir que Agromakers acceda a la ubicación de este dispositivo estando en el punto de entrega.',
        'audio': 'assets/sound/Zaz-music.mpeg',
      },
      cssClass: 'my-custom-class',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  listarAccesoEntrega(){
    this.aguaService.listarAccesoEntrega().subscribe(resp=>{
      this.acceso_entrega = Object.values(resp);      
    })
  }

  getGeo(){
    this.geoLocation.getCurrentPosition().then((resp) => {
      /* resp.coords.latitude
      resp.coords.longitude */
      this.latitud_entrega= resp.coords.latitude;
      this.longitud_entrega= resp.coords.longitude;
      console.log('coordenadas', this.latitud_entrega);
      console.log('coordenadas', this.longitud_entrega);       
    }).catch((error) => {      
      console.log('Error getting location', error);
    });
    let watch = this.geoLocation.watchPosition();
    watch.subscribe((data) => {
      
      //data.coords.latitude
      //data.coords.longitude
    });     
  } 

  comparte(evt){
    console.log(evt.detail.value);
    if(evt.detail.value == 'Si'){
      this.getGeo();
    }else{
      this.latitud_entrega= null;
      this.longitud_entrega= null;
    }
  }

  acceso(evt){
    console.log(evt.detail.value);
    this.acceso_punto_entrega = evt.detail.value;
  }

  guardar(){
    let data: any;
    data = {
      acceso_entrega : this.acceso_punto_entrega,
      latitud_entrega : this.latitud_entrega,
      longitud_entrega : this.longitud_entrega,
    }     
    this.unidadProductiva.editarFinca(data, this.tokenUP).subscribe(resp=>{
      this.resultado = Object.values(resp)
      console.log(this.resultado);
      this.generalService.guardarToken(this.resultado[0], 'tokenUP');
      this.router.navigateByUrl(`/productor/registro-biodiversidad`);
    })
  }

}
