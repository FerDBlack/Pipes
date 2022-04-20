import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower:string = 'fernando';
  nombreUpper:string = 'FERNANDO';
  nombreCompleto:string = 'FernaNDo hErrera';

  fecha: Date = new Date(); //El día actual;
  constructor() { }

  ngOnInit(): void {
  }

}
