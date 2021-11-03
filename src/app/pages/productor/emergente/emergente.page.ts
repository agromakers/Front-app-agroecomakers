import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-emergente',
  templateUrl: './emergente.page.html',
  styleUrls: ['./emergente.page.scss'],
})
export class EmergentePage implements OnInit {

  @Input() mensaje: string;
  @Input() imagen: any;
  @Input() titulo: any;

  constructor(
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrl.dismiss();
  }

}
