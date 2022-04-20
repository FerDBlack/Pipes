import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
      this.items = [
        {
          label: 'Home Pipes Angular',
          icon: 'pi pi-th-large',
          items:[
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
              routerLink:'/',
            },
            {
              label: 'Números',
              icon: 'pi pi-euro',
              routerLink:'numeros',
            },
            {
              label: 'No comunes',
              icon: 'pi pi-box',
              routerLink:'no-comunes',
            },
            {
              label: 'Ordenar',
              icon: 'pi pi-sort-alt',
              routerLink:'ordenar',
            },
          ],
        },
      ];
  }

}
