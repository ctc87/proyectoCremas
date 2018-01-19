import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgForm }   from '@angular/forms';
import { HttpModule, JsonpModule, Http }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent }  from './app.component';
import { appComponentPreguntas } from './modulo_preguntas/app.component.preguntas';
import { appComponentResultado } from './modulo_resultado/app.component.resultado';
import { Producto } from './modulo_resultado/productos/app.component.producto';
import { appComponentPreguntasTemplate } from './modulo_preguntas_template/app.component.preguntas.template';
import { appNav }   from './modulo_barraNav/app.component.nav';
import { APIservice } from './servicioAPI/app.servicioAPI';
import { MyPostService } from './servicioAPI/mypost.service';
import { HttpConbinaciones } from './servicioAPI/app.servicioHttpConbinaciones';
import { UniquePipe } from './pipes/app.pipe.preguntas';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { MyPostComponent } from './modulo_resultado/componente_post/mypost.component';
import { MyPostDirective } from './directivas/mypost.directive';
import { respPipe } from './pipes/app.pipe.respuestas';
import { respPipe2 } from './pipes/app.pipe.respuestas2';
import { KeysPipe } from './pipes/app.pipe.array';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
    Producto,
    ModalComponent,
  	MyPostComponent,
	  MyPostDirective,	
    appNav,
    UniquePipe,
    respPipe,
    respPipe2,
    KeysPipe
  ], 
  entryComponents: [ 
      Producto 
  ], 
  bootstrap: [ AppComponent ],
  providers: [
    APIservice,
    HttpConbinaciones,
    MyPostService
  ]
})
export class AppModule { }

