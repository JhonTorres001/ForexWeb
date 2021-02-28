import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css']
})
export class PrecioComponent implements OnInit {

  constructor() { }
  interval;

  tarjeta:String ="10";
  tarjeta2:String ="10";


  ngOnInit(): void {
    
    this.startTimer();
  }

  startTimer(){
    this.interval = setInterval(() => {
      this.tarjeta = (Math.floor(Math.random()* 100) + 1).toString();
      this.tarjeta2 = (Math.floor(Math.random()* 100) + 1).toString();
      console.log( Math.floor(Math.random()* 100) + 1)
    }, 1000);
  }

}
