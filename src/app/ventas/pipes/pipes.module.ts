import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MayusculasPipe} from "./mayusculas.pipe";
import { VuelaPipe } from './vuela.pipe';
import { OrdenarPipe } from './ordenar.pipe';



@NgModule({
  declarations: [
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports: [
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
