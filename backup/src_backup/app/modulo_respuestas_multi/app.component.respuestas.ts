import {Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-respuesta-multi',
  templateUrl: './app.component.respuestas.html'

}) 
 
export class appComponentRespuestaMulti implements OnInit {
  
  @Input() public respuestaMulti: string;
  
  public checkboxGroupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    
    this.checkboxGroupForm  = this.formBuilder.group({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false      
    }); 
  }

}


