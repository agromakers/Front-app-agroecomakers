import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  respuestaStorage: any;

  private objectSource = new BehaviorSubject<{}>({});
  $getObjectSource = this.objectSource.asObservable();

  userToken: any;
  private _storage: Storage | null = null;

  constructor(
    private alertController: AlertController,
    private storage: Storage,
  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  sendObjectSource(data: any){
    this.objectSource.next(data);    
  }

  guardarToken(idToken: string, name:string){
    this.storage.set(name , idToken);
    let hoy = new Date();
    hoy.setSeconds(360000);
    this.storage.set('expira', hoy.getTime().toString());
    console.log(this.storage);
    
  }

  async recuperarStorage(name: string){
    
    return this.respuestaStorage = await this.storage.get(name);
  }

  estaAutenticado():boolean{
    this.userToken= this.storage.get('token');
    if(this.userToken == ''){
      return false;      
    }
    const expira=Number(this.storage.get('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    if(expiraDate > new Date()){
      return true;
    }else{
      return false;
    }
  }
}
