import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';

@Component({
  selector: 'app-registro-trabajadores',
  templateUrl: './registro-trabajadores.page.html',
  styleUrls: ['./registro-trabajadores.page.scss'],
})
export class RegistroTrabajadoresPage implements OnInit {

  progreso = 0.005;
  formRegistro:any= FormGroup;
  resultado: any;
  numero_trabajadores: number = 0;
  numero_jornaleros: number = 0;  
  numero_discapacidad: number = 0;
  numero_afro: number = 0;
  numero_migrantes: number = 0;
  numero_indigenas: number = 0;
  tokenUP : any;

  constructor(
    private router: Router,
    private generalService : GeneralService,
    private unidadProductiva: UnidadProductivaService,
  ) {
    //this.crearFormulario();
   }

  ngOnInit() {
    this.recuperarId();   
  }

  async recuperarId(){
    this.generalService.recuperarStorage('tokenUP').then(resp=>{
      this.tokenUP = resp;
      console.log(this.tokenUP);
    });
  }

  minusTrabajador(){
    if(this.numero_trabajadores <= 0){
      this.numero_trabajadores = 0;
    }else{
      this.numero_trabajadores -= 1;
    }
  }

  addTrabajador(){
    if(this.numero_trabajadores < 0){
      this.numero_trabajadores = 0;
    }else{
      this.numero_trabajadores += 1;
    }
  } 

  minusJornalero(){
    if(this.numero_jornaleros <= 0){
      this.numero_jornaleros = 0;
    }else{
      this.numero_jornaleros -= 1;
    }
  }

  addJornalero(){
    if(this.numero_jornaleros < 0){
      this.numero_jornaleros = 0;
    }else{
      this.numero_jornaleros += 1;
    }
  } 

  minusDiscapacidad(){
    if(this.numero_discapacidad <= 0){
      this.numero_discapacidad = 0;
    }else{
      this.numero_discapacidad -= 1;
    }
  }

  addDiscapacidad(){
    if(this.numero_discapacidad < 0){
      this.numero_discapacidad = 0;
    }else{
      this.numero_discapacidad += 1;
    }
  }

  minusAfro(){
    if(this.numero_afro <= 0){
      this.numero_afro = 0;
    }else{
      this.numero_afro -= 1;
    }
  }

  addAfro(){
    if(this.numero_afro < 0){
      this.numero_afro = 0;
    }else{
      this.numero_afro += 1;
    }
  }
  minusMigrante(){
    if(this.numero_migrantes <= 0){
      this.numero_migrantes = 0;
    }else{
      this.numero_migrantes -= 1;
    }
  }

  addMigrante(){
    if(this.numero_migrantes < 0){
      this.numero_migrantes = 0;
    }else{
      this.numero_migrantes += 1;
    }
  }

  minusIndigena(){
    if(this.numero_indigenas <= 0){
      this.numero_indigenas = 0;
    }else{
      this.numero_indigenas -= 1;
    }
  }

  addIndigena(){
    if(this.numero_indigenas < 0){
      this.numero_indigenas = 0;
    }else{
      this.numero_indigenas += 1;
    }
  }

  guardar(){
    let data: any;
    data = {
      total_trabajadores: this.numero_trabajadores,
      numero_jornaleros : this.numero_jornaleros,
      numero_discapacidad : this.numero_discapacidad,
      numero_afro : this.numero_afro,
      numero_migrante : this.numero_migrantes,
      numero_indigena : this.numero_indigenas,
    }     
    this.unidadProductiva.editarFinca(data, this.tokenUP).subscribe(resp=>{
      this.resultado = Object.values(resp)
      console.log(this.resultado);
      this.generalService.guardarToken(this.resultado[0], 'tokenUP');
      this.router.navigateByUrl(`/productor/registro-hidrico`);
    })
  }

}
