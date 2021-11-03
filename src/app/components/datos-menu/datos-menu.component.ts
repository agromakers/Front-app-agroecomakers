import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-datos-menu',
  templateUrl: './datos-menu.component.html',
  styleUrls: ['./datos-menu.component.scss'],
})
export class DatosMenuComponent implements OnInit {

  user_id: any;
  usuario: any;
  constructor(
    private usuarioService: UsuarioService
  ) {
    this.cargarUsuario();
    this.user_id = localStorage.getItem('id_user');
   }

  ngOnInit() {}

  
  
  cargarUsuario(){  
    let data ={
      _id: this.user_id
    } 
    if(this.user_id != undefined){
      this.usuarioService.listarUsuario(data).subscribe(resp=>{
        console.log(resp);
        this.usuario = resp;      
      })
    }
    
  }

}
