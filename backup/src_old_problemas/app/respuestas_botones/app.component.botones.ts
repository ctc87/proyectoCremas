import {Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-preguntas-boton',
  templateUrl: './app.component.botones.html'

}) 

export class appComponentBotones implements OnInit {
  
  @Input() public respuesta1: string;
  @Input() public respuesta2: string;
  @Input() public respuesta3: string;
  @Input() public respuesta4: string;
  @Input() public respuesta5: string;
  @Input() public respuesta6: string;
  @Input() public respuesta7: string;
  @Input() public respuesta8: string;
  @Input() public respuesta9: string;
  @Input() public respuesta10: string;
 
 

  public radioGroupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
    this.radioGroupForm = this.formBuilder.group({
       'model':0
    }); 
  }

}


