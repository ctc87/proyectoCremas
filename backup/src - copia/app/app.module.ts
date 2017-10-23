import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule, Http }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent }  from './app.component';
import { appComponentRadio } from './respuestas_radio/app.component.radio';
import { appComponentBotones } from './respuestas_botones/app.component.botones';
import { appNav }   from './barra_navegacion/app.component.nav';
import { appPopup } from './popUp_redireccion/app.component.popup';
import { APIservice } from './servicioAPI/app.servicioAPI';
import {  UniquePipe } from './respuestas_radio/app.pipe.preguntas';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule, 
    
    NgbModule.forRoot() 
  ],
  declarations: [
    AppComponent,
    appComponentRadio,
    appComponentBotones,
    appNav,
    appPopup,
    UniquePipe//,
    //APIservice
  ],
  bootstrap: [ AppComponent ],
  providers: [ APIservice ]
})
export class AppModule { }

