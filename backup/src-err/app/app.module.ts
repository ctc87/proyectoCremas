import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgForm }   from '@angular/forms';
import { HttpModule, JsonpModule, Http }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent }  from './app.component';
import { appComponentPreguntas } from './modulo_preguntas/app.component.preguntas';
import { appComponentRespuestas } from './modulo_respuestas/app.component.respuestas';
import { appComponentSubRespuestas } from './modulo_subrespuestas/app.component.subrespuestas';
import { appNav }   from './modulo_barraNav/app.component.nav';
import { appComponentSubRespuestasNivel2 } from './modulo_subrespuestas_nivel2/app.component.subrespuestas';
import { appComponentSubRespuestasNivel3 } from './modulo_subrespuestas_nivel3/app.component.subrespuestas';
import { APIservice } from './servicioAPI/app.servicioAPI';
import { UniquePipe } from './pipes/app.pipe.preguntas';
import { Unique2Pipe } from './pipes/app.pipe.resp';
import { ResPipe } from './pipes/app.pipe.respuestas';

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
    appComponentPreguntas,
    appComponentRespuestas,
    appComponentSubRespuestas,  
    appComponentSubRespuestasNivel2,
    appComponentSubRespuestasNivel3,
    appNav,
    UniquePipe,
    ResPipe,
    Unique2Pipe
  ],
  bootstrap: [ AppComponent ],
  providers: [ APIservice]
})
export class AppModule { }

