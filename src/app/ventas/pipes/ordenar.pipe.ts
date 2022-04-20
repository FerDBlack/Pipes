import {Pipe, PipeTransform} from '@angular/core';
import {Heroe} from "../interfaces/ventas.interfaces";

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], criterioOrden: string): Heroe[] {

    switch (criterioOrden) {
      case 'nombre':
        return value.sort((h1, h2) =>
          (h1.nombre > h2.nombre) ? 1 : -1
        );
      case 'vuela':
        return value.sort((h1, h2) =>
          (h1.vuela > h2.vuela) ? -1 : 1
        );
      case 'color':
        return value.sort((h1, h2) =>
          (h1.color > h2.color) ? -1 : 1
        );

      default:
        return value;
    }


  }

}
