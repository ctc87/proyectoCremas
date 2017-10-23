import {Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { APIservice } from '../servicioAPI/app.servicioAPI';
import { survey } from '../constructor.survey';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs/Subscription";
//import { appComponentPreguntas } from "../modulo_preguntas/app.component.preguntas";

@Component({
  selector: 'app-subrespuesta',
  providers: [APIservice/*, appComponentPreguntas*/],  
  templateUrl: './app.component.subrespuestas.html'
}) 
 
export class appComponentSubRespuestas implements OnInit {
    
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private apiservice : APIservice) {}
  
  cuestionarios:survey[];
  @Input() public RespuestaMulti: number;  
  @Input() public Respuesta: string;
  @Input() public Respuesta1: string;
  @Input() public Respuesta2: string;
  @Input() public Respuesta3: string;
  @Input() public Respuesta4: string;
  @Input() public Respuesta5: string;
  @Input() public Respuesta6: string;
  @Input() public Respuesta7: string;
  @Input() public Respuesta8: string;
  @Input() public Respuesta9: string;
  @Input() public Respuesta10: string;
  @Input() public IdCuestionarioNivel11: string; 
  @Input() public IdCuestionarioNivel12: string; 
  @Input() public IdCuestionarioNivel211: string; 
  @Input() public IdCuestionarioNivel212: string; 
  @Input() public IdCuestionarioNivel221: string; 
  @Input() public IdCuestionarioNivel222: string; 
  @Input() public IdCuestionarioNivel3111: string; 
  @Input() public IdCuestionarioNivel3112: string; 
  @Input() public IdCuestionarioNivel3121: string; 
  @Input() public IdCuestionarioNivel3122: string; 
  @Input() public IdCuestionarioNivel3211: string; 
  @Input() public IdCuestionarioNivel3212: string; 
  @Input() public IdCuestionarioNivel3221: string; 
  @Input() public IdCuestionarioNivel3222: string;   
  @Input() public IdCuestionarioNivel41111: string; 
  @Input() public IdCuestionarioNivel41112: string; 

  showHide11:boolean;
  showHide12:boolean;
  showHide21:boolean;
  showHide22:boolean; 

  changeShowStatus11(){
    this.cerrarTodos()
    this.showHide11 = !this.showHide11;       
  }
  changeShowStatus12(){
    this.cerrarTodos()
    this.showHide12 = !this.showHide12;       
  }
  changeShowStatus21(){
    this.cerrarTodos()
    this.showHide21 = !this.showHide21;       
  }
  changeShowStatus22(){
    this.cerrarTodos()
    this.showHide22 = !this.showHide22;       
  }
  cerrarTodos(){
    this.showHide11 = false;
    this.showHide12 = false;
    this.showHide21 = false;       
    this.showHide22 = false;
  }

  loadComments2(){
    this.apiservice.getComments2()
                      .subscribe(
                          cuestionarios => this.cuestionarios=cuestionarios, //Bind to view
                           err => {
                               console.log(err);
                           });
} 

  ngOnInit() {
    this.loadComments2()
    
    this.radioGroupForm = this.formBuilder.group({
       'model':0
    }); 
  }



}
