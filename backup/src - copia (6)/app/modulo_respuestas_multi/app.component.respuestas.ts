import {Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-respuesta-multi',
  templateUrl: './app.component.respuestas.html'

}) 
 
export class appComponentRespuestaMulti implements OnInit {
  
  @Input() public respuestaMulti1: string;
  @Input() public respuestaMulti2: string;
  @Input() public respuestaMulti3: string;
  @Input() public respuestaMulti4: string;
  @Input() public respuestaMulti5: string;
  @Input() public respuestaMulti6: string;
  @Input() public respuestaMulti7: string;
  @Input() public respuestaMulti8: string;
  @Input() public respuestaMulti9: string;
  @Input() public respuestaMulti10: string;

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


