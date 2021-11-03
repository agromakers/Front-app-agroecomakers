import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  token: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('id');
    console.log(this.token);
    
  }

  prueba(){
    this.router.navigateByUrl(`prueba/prueba1`);
  }
}
