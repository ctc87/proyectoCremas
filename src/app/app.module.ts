import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgForm }   from '@angular/forms';
import { HttpModule, JsonpModule, Http }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent }  from './app.component';
import { appComponentPreguntas } from './modulo_preguntas/app.component.preguntas';
import { appComponentResultado } from './modulo_resultado/app.component.resultado';
import { appComponentPreguntasTemplate } from './modulo_preguntas_template/app.component.preguntas.template';
import { appNav }   from './modulo_barraNav/app.component.nav';
import { APIservice } from './servicioAPI/app.servicioAPI';
import { UniquePipe } from './pipes/app.pipe.preguntas';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,     
    NgbModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    appComponentPreguntas,
    appComponentPreguntasTemplate,
    appComponentResultado,
    appNav,
    UniquePipe
  ],
  bootstrap: [ AppComponent ],
  providers: [ APIservice]
})
export class AppModule { }

