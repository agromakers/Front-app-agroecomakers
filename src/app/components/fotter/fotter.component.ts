import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.scss'],
})
export class FotterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  irMapa(){
    this.router.navigateByUrl('/mapa');
  }

  irHome(){
    this.router.navigateByUrl('/productor');
  }

}
