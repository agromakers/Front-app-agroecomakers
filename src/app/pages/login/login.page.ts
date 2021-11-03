import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'src/app/services/general.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string;
  password:string;
  resultado: any;
  passwordType : string = 'password';
  passwordFlag : boolean = false;

  private _storage: Storage | null = null;

  constructor(
    private toastr: ToastController,
    private alertCtrl: AlertController,
    private usuarioService: UsuarioService,
    private router: Router,
    private generalService : GeneralService,
    private translateService: TranslateService,
    private storage: Storage,
  ) { 
    this.init();
  }

  ngOnInit() { }

  changeType(){
    if(this.passwordFlag){
      this.passwordFlag = false;
      this.passwordType = 'password';
    }else{
      this.passwordFlag = true;
      this.passwordType = 'text';
    }
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  login(){
    let aux= 0;
    if(this.usuario && this.password){
      let data={
        'usuario' : this.usuario,
        'password' : this.password
      }
      this.usuarioService.loginUsuario(data).subscribe(resp=>{
        this.resultado = Object.values(resp); 
        console.log('resultado', this.resultado);       
        if(this.resultado[0] != false){        
          this.generalService.guardarToken(this.resultado[0], 'tokenUser');       
          this.generalService.estaAutenticado(); 
          this.storage.set('id_user', this.resultado[1]);
          let data1={
            _id : this.resultado[1],
          }
          this.usuarioService.listarUsuario(data1).subscribe(resp=>{
            console.log('Usuarios', Object.values(resp));
              for(let user of Object.values(resp)){
                for(let dato of user.id_rol){
                  if(dato.nombre_rol == 'Productor' || !dato.nombre_rol){
                    aux = 1;
                    //this.router.navigateByUrl('/productor/registro-finca');
                    //return;
                  }else if(dato.nombre_rol == 'Transportador'){
                    aux = 2;
                    //this.router.navigateByUrl('/transportador/registro-transporte');
                    //return;
                  }else{
                    aux = 3;
                    console.log('lleva a cliente'); 
                    //return;                   
                  }
                }
              }
              if(aux==1){
                this.router.navigateByUrl('/productor');
              }else if(aux == 2){
                this.router.navigateByUrl('/transportador/registro-transporte');
              }else if(aux == 3){
                this.router.navigateByUrl('/transportador/registro-transporte');
              } 
          });
        }else{
          this.generalService.presentAlert('error', 'Email o contraseña incorrectos');
        }      
      },error=>{
        console.log('Error', error);        
      });
    }else{
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Atencion',
      //subHeader: 'Subtitle',
      message: 'Recuerde ingresar correo electrónico y contraseña',
      buttons: ['OK']
    });
    await alert.present();

  } 
}
