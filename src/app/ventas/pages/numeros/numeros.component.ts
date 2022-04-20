import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas:number = 5800122.5567;
  porcentaje:number = 0.4856;

  constructor() { }

  ngOnInit(): void {
  }

}
