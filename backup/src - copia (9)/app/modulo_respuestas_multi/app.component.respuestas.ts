import {Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-respuesta-multi',
  templateUrl: './app.component.respuestas.html'

}) 
 
export class appComponentRespuestaMulti implements OnInit {
   
  @Input() public RespuestaMulti1: string;
  @Input() public RespuestaMulti2: string;
  @Input() public RespuestaMulti3: string;
  @Input() public RespuestaMulti4: string;
  @Input() public RespuestaMulti5: string;
  @Input() public RespuestaMulti6: string;
  @Input() public RespuestaMulti7: string;
  @Input() public RespuestaMulti8: string;
  @Input() public RespuestaMulti9: string;
  @Input() public RespuestaMulti10: string; 
  @Input() public SubRespuestaOrigen1: string;
  @Input() public SubRespuestaOrigen2: string;
  @Input() public SubRespuestaOrigen3: string;  
  @Input() public SubRespuestaOrigen1Uni1: string;         
  @Input() public SubRespuestaOrigen1Uni2: string;
  @Input() public SubRespuestaOrigen2Uni1: string;
  @Input() public SubRespuestaOrigen2Uni2: string;
  @Input() public SubRespuestaOrigen3Uni1: string;
  @Input() public SubRespuestaOrigen3Uni2: string;


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


