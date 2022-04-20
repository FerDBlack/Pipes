//Imports de Angular
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';

//Modulos
import {AppRouterModule} from "./app-router/app-router.module";
import {SharedModule} from "./shared/shared.module";
import {VentasModule} from "./ventas/ventas.module";

//Cambiar el locale de la app
import  localeEs from '@angular/common/locales/es'
import  localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from "@angular/common";
import {PipesModule} from "./ventas/pipes/pipes.module";

registerLocaleData(localeEs);
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    PipesModule,
    SharedModule,
    VentasModule,


  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
