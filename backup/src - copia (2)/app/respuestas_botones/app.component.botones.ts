import {Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-preguntas-boton',
  //template:'aaa{{pregunta.idRespuesta.respuesta}} '

  templateUrl: './app.component.botones.html'

}) 

export class appComponentBotones implements OnInit {
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 0
    }); 
  }

}


