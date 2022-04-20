import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasicosComponent} from './pages/basicos/basicos.component';
import {OrdenarComponent} from './pages/ordenar/ordenar.component';
import {NumerosComponent} from './pages/numeros/numeros.component';
import {NoComunesComponent} from './pages/no-comunes/no-comunes.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {MayusculasPipe} from "./pipes/mayusculas.pipe";
import {PipesModule} from "./pipes/pipes.module";


@NgModule({
  declarations: [
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
    NoComunesComponent,

  ],
  exports: [
    BasicosComponent,
    OrdenarComponent,
    NumerosComponent,
    NoComunesComponent,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PipesModule


  ]
})
export class VentasModule {
}
