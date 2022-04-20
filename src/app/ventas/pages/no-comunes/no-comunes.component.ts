import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan','Sofía'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  //KeyValue
  persona={
    nombre:'Fernando',
    edad:'35',
    direccion:'ottawa, Canadá'
  }

  //Json
  heroes = [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    },
  ]

  //Async
  miObservable = interval(5000);
  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de promesa. Fin de la promesa');
  },3500);

  });

  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarCliente():void{
    if (this.nombre=='Susana'){
      this.nombre ='Fernando';
      this.genero='masculino';
    }else {
      this.nombre ='Susana';
      this.genero='femenino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
    console.log(this.clientes)
  }

}
