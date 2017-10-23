import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-respuesta-unica',
  templateUrl: './app.component.respuestas.html'

}) 

export class appComponentRespuestaUnica implements OnInit {
   
  @Input() public respuestaUni1: string;
  @Input() public respuestaUni2: string;
  @Input() public respuestaUni3: string;
  @Input() public respuestaUni4: string;
  @Input() public respuestaUni5: string;
  @Input() public respuestaUni6: string;
  @Input() public respuestaUni7: string;
  @Input() public respuestaUni8: string;
  @Input() public respuestaUni9: string;
  @Input() public respuestaUni10: string;
  //@Output() update = new EventEmitter();

  public radioGroupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
    this.radioGroupForm = this.formBuilder.group({
       'model':0
    }); 
  }

}


