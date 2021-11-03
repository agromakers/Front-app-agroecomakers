import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AguaService } from 'src/app/services/agua.service';
import { GeneralService } from 'src/app/services/general.service';
import { UnidadProductivaService } from 'src/app/services/unidad-productiva.service';

@Component({
  selector: 'app-registro-hidrico',
  templateUrl: './registro-hidrico.page.html',
  styleUrls: ['./registro-hidrico.page.scss'],
})
export class RegistroHidricoPage implements OnInit {

  formHidrico: any= FormGroup;
  origenAgua: any;
  almacenamientoAgua: any;
  riegoAgua: any;
  controlAgua: any;
  terrazasAgua: any;
  residuosAgua: any;
  tokenUP: any
  resultado: any;

  constructor(
    private origenAguaService: AguaService,
    private generalService: GeneralService,
    private fb: FormBuilder,
    private unidadProductiva: UnidadProductivaService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.crearFormulario();
    this.recuperarId();
    this.listarOrigenAgua();
    this.listarAlmacenamientoAgua();
    this.listarRiegoAgua();
    this.listarControlAgua();
    this.listarTerrazasAgua();
    this.listarResiduosAgua()
  }

  async recuperarId(){
    this.generalService.recuperarStorage('tokenUP').then(resp=>{
      this.tokenUP = resp;
      console.log(this.tokenUP);
    });
  }

  crearFormulario(){
    this.formHidrico = new FormGroup({
      origen_agua : new FormControl(),
      almacenamiento_agua : new FormControl(),
      riego_agua : new FormControl(),
      control_agua : new FormControl(),
      terrazas_agua : new FormControl(),
      residuos_agua : new FormControl(),
      
    });
    this.formHidrico = this.fb.group({
      origen_agua : [''],
      almacenamiento_agua : [''],
      riego_agua : [''],
      control_agua : [''],
      terrazas_agua : [''],
      residuos_agua : [''],
    });    
  } 

  listarOrigenAgua(){
    this.origenAguaService.listarOrigenAgua().subscribe(resp=>{
      this.origenAgua = Object.values(resp);
      console.log(this.origenAgua);      
    })
  }

  listarAlmacenamientoAgua(){
    this.origenAguaService.listarAlmacenamientoAgua().subscribe(resp=>{
      this.almacenamientoAgua = Object.values(resp);
      console.log(this.almacenamientoAgua);      
    })
  }

  listarRiegoAgua(){
    this.origenAguaService.listarRiegoAgua().subscribe(resp=>{
      this.riegoAgua = Object.values(resp);
      console.log(this.riegoAgua);      
    })
  }

  listarControlAgua(){
    this.origenAguaService.listarControlAgua().subscribe(resp=>{
      this.controlAgua = Object.values(resp);
      console.log(this.controlAgua);      
    })
  }

  listarTerrazasAgua(){
    this.origenAguaService.listarTerrazasAgua().subscribe(resp=>{
      this.terrazasAgua = Object.values(resp);
      console.log(this.terrazasAgua);      
    })
  }

  listarResiduosAgua(){
    this.origenAguaService.listarResiduosAgua().subscribe(resp=>{
      this.residuosAgua = Object.values(resp);
      console.log(this.residuosAgua);      
    })
  }

  guardar(){
    let data: any;
    data = {
      origen_agua : this.formHidrico.value.origen_agua,
      almacenamiento_agua : this.formHidrico.value.almacenamiento_agua,
      riego_agua : this.formHidrico.value.riego_agua,
      control_agua : this.formHidrico.value.control_agua,
      terrazas_agua : this.formHidrico.value.terrazas_agua,
      residuos_agua : this.formHidrico.value.residuos_agua,
    } 
    console.log('data', data);
        
    this.unidadProductiva.editarFinca(data, this.tokenUP).subscribe(resp=>{
      this.resultado = Object.values(resp)
      console.log(this.resultado);
      this.generalService.guardarToken(this.resultado[0], 'tokenUP');
      this.router.navigateByUrl(`/productor/registro-entrega`);
    })
  }

}
