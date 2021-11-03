import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UnidadesFuncionalesService } from 'src/app/services/unidades-funcionales.service';
import { EmergentePage } from '../../emergente/emergente.page';

@Component({
  selector: 'app-menu-unidad-funcional',
  templateUrl: './menu-unidad-funcional.page.html',
  styleUrls: ['./menu-unidad-funcional.page.scss'],
})
export class MenuUnidadFuncionalPage implements OnInit {

  unidadesFuncionales: any;
  constructor(
    private modalCtrl: ModalController,
    private unidadesFuncionalesService: UnidadesFuncionalesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.mostrarModalEmergente();
    this.mostrarUF();
  }

  async mostrarModalEmergente(){
    const modal = await this.modalCtrl.create({
      component: EmergentePage,
      componentProps:{
        'mensaje':'La Unidad Funcional (UF), es un espacio de la Unidad Productiva, que nos presta un servicio o tiene una función, estas pueden ser: agricolas, agropecuarias y pesca, silvestres, de producción de agro-insumos, transformación de productos y/o trabajadores.',
        'imagen': 'assets/icon/aem-back-white-512.png',
        'titulo' : 'Indicaciones',
      },
      cssClass: 'my-custom-class-emergente',
      swipeToClose: true,
      keyboardClose: true
    });
    return await modal.present();
  }

  mostrarUF(){
    this.unidadesFuncionalesService.listarUnidadesFuncionales().subscribe(resp=>{
      console.log(resp);
      this.unidadesFuncionales = resp;      
    })
  }

  continuar(ruta){
console.log('ruta', ruta);
    this.router.navigateByUrl(`/productor/${ruta}`);
  }

}
