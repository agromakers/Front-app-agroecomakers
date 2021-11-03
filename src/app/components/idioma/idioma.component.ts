import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaComponent implements OnInit {

  constructor(
    private translateService : TranslateService,
  ) { }

  ngOnInit() {}

  england(){
    this.translateService.use('Ingles');
  }

  espanish(){
    this.translateService.use('Español');
  }

  french(){
    this.translateService.use('Francés');
  }

}
