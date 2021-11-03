import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Howl } from 'howler';

export interface Track{
  path: string;
}

@Component({
  selector: 'app-my-modals',
  templateUrl: './my-modals.page.html',
  styleUrls: ['./my-modals.page.scss'],
})
export class MyModalsPage implements OnInit {
  @Input() mensaje: string;
  @Input() audio: any;

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying: boolean = false;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async closeModal(){
    this.modalCtrl.dismiss();
    this.player.stop();
  }

  abrirAudio(){
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src:[this.audio],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onplay:()=>{
        this.isPlaying = true;
        this.activeTrack = this.audio
      },
      onend:()=>{

      }
    });
    this.player.play();    
  }

}
