import { Component, OnInit, AfterContentChecked, ViewChild, ViewEncapsulation } from '@angular/core';
import Swiper, { Navigation, Pagination, SwiperOptions, Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { SwiperComponent } from 'swiper/angular';


Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomePage implements OnInit, AfterContentChecked {

  
  slides: any[]=[
    {
    texto: 'Este aplicativo busca facilitar el trabajo y la comunicación entre productores del agro, transportadores y consumidores.',
    img: '../../../assets/img_slide/colaborativo.jpg',
  },
  {
    texto: 'Como productor/ transformador, le brinda ayuda de voz para facilitar y hacer seguimiento, planeación y venta de sus cosechas.',
    img: '../../../assets/img_slide/cultivo.jpeg',
  },
  {
    texto: 'Como cliente/ tienda, le facilita una agenda para hacer pedidos de productos actuales o futuros, al igual que la posibilidad de evaluar producción y transporte.',
    img: '../../../assets/img_slide/sostenibilidad.jpg',
  },
  {
    texto: 'Como transportador, le brinda una agenda ordenada por rutas para optimizar tiempo y facilitar las entregas.',
    img: '../../../assets/img_slide/trabajo.jpg',
  },

]

slideOpts = {
  initialSlide: 1,
  speed: 1000,
  autoplay: true,
};

constructor() {}

  
  ngOnInit() {
  }

  ngAfterContentChecked(){
    /* if (this.swiper){
      this.swiper.updateSwiper({});
    } */
  }

}
