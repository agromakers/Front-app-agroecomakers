import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  listaIdiomas: string [] = [];
  listaPais= ["Colombia", "Ecuador", "Peru"];
  constructor(
    private translateService: TranslateService,
  ) {
    this.listaIdiomas = this.translateService.getLangs();
   }

  ngOnInit() {}

  cambiaIdioma(event){
    this.translateService.use(event.detail.value);
    console.log(event.detail.value);
    
  }
}
