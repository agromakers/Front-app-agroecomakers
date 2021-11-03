import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'src/app/services/general.service';
//import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  listaIdiomas: any;
  listaPais = ['Colombia', 'Perú', 'Ecuador']
  user_id: any;
  token:any;
  //private _storage: Storage | null = null;

  constructor(
    private translateService: TranslateService,
    private menuCtrl : MenuController,
    private router: Router,
    private generalService: GeneralService,
    //private storage: Storage,
  ) {

    this.listaIdiomas = this.translateService.getLangs();
    //this.init();
  }

  ngOnInit() {    
  }

  salir(){
    navigator["app"].exitApp();
  }

}
