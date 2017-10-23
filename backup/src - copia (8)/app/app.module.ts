import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule, Http }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent }  from './app.component';
import { appComponentPreguntas } from './modulo_preguntas/app.component.preguntas';
import { appComponentRespuestaUnica } from './modulo_respuestas_unica/app.component.respuestas';
import { appComponentRespuestaMulti } from './modulo_respuestas_multi/app.component.respuestas';
import { appNav }   from './modulo_barraNav/app.component.nav';
import { appPopup } from './modulo_popup/app.component.popup';
import { APIservice } from './servicioAPI/app.servicioAPI';
import { UniquePipe } from './modulo_preguntas/app.pipe.preguntas';
import { Unique2Pipe } from './modulo_preguntas/app.pipe.resp';
import { ResPipe } from './modulo_preguntas/app.pipe.respuestas';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
//import { KeysPipe } from './respuestas_radio/app.pipe.array';
//import { PagerService } from './servicioPAG/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,     
    NgbModule.forRoot() ,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    appComponentPreguntas,
    appComponentRespuestaUnica,
    appComponentRespuestaMulti,
    appNav,
    appPopup,
    UniquePipe,
    ResPipe,
    Unique2Pipe
  ],
  bootstrap: [ AppComponent ],
  providers: [ APIservice]
})
export class AppModule { }

