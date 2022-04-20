import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  nombre:string = "fernando herrera";
  valor: number = 1000;
  obj = {
    nombre:this.nombre,
  }

  constructor(
    private primeNgConfig: PrimeNGConfig,
  ) {
  }

  ngOnInit() {
    this.primeNgConfig.ripple=true;
  }

  mostrarAtributos(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

}
