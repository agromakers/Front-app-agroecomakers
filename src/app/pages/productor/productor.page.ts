import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { GeneralService } from 'src/app/services/general.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VeredaService } from 'src/app/services/vereda.service';

@Component({
  selector: 'app-productor',
  templateUrl: './productor.page.html',
  styleUrls: ['./productor.page.scss'],
})
export class ProductorPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }
  irMapa(){
    this.router.navigateByUrl('/mapa');
  } 

}
