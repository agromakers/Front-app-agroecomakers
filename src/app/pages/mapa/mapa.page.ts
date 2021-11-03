import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralService } from 'src/app/services/general.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MyModalsPage } from '../my-modals/my-modals.page';

declare var google;

interface Marker{
  position:{
    lat: number,
    lng: number,
  };
  title: string;
}

interface WayPoint {
  location: {
    lat: number,
    lng: number,
  };
  stopover: boolean;
}
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map = null;
  latitud : number;
  longitud : number;
  idUser: any;
  markers: Marker[] = [
    {
      position: {
        lat: 4.658383846282959,
        lng: -74.09394073486328,
      },
      title: 'Parque Simón Bolivar'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: 4.676802158355713,
        lng: -74.04825592041016,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ]; 
  constructor( 
    private usuarioService: UsuarioService,
    private generalService: GeneralService,
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {
    this.recuperarId();    
  }

  async recuperarId(){
    this.generalService.recuperarStorage('id_user').then(resp=>{
      this.idUser = resp.toString() ;
      console.log(this.idUser);
      this.listarCoordenadas(this.idUser);
    });
  }

  listarCoordenadas(idUser){
    let data= {
      _id: idUser,
    }
    this.usuarioService.listarUsuario(data).subscribe(resp=>{
      Object.values(resp).forEach(usuario=>{
        Object.values(usuario.id_finca).forEach((finca: any)=>{
          console.log(finca.latitud_finca);
          console.log(finca.longitud_finca);
          this.latitud = parseFloat(finca.latitud_finca);
          this.longitud = parseFloat(finca.longitud_finca);
        });        
      });
      if(this.latitud === NaN){
        this.mostrarModal();
      }else{ 
        this.loadmap();
      }
    }); 
  }

  loadmap(){     
    const mapEle: HTMLElement = document.getElementById('map');
    //const indicatorsEle: HTMLElement = document.getElementById('indicators');    
    const myLatLng = {lat: this.latitud, lng: this.longitud};
    this.map = new google.maps.Map(mapEle,{
      center: myLatLng,
      zoom: 13
    });
    /* this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle); */
    google.maps.event.addListenerOnce(this.map, 'idle', ()=>{
      //this.renderMarkers();
      mapEle.classList.add('show-map');
      /* this.calculateRoute(); */
      const marker ={
        position:{
          lat:this.latitud,
          lng:this.longitud,
        },
        title: 'punto uno'
      };
      this.addMarker(marker);
      //this.renderMarkers();        
    });      
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: MyModalsPage,
      componentProps:{
        'mensaje':'Aun no ha creado una Unidad Productiva o la creo sin compartir las coordenadas',
        'audio': 'assets/sound/chino_nacho.mp3',
      },
      cssClass: 'my-custom-class',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
  addMarker(marker: Marker){
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}

