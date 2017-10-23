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
import { appComponentPreguntas } from "../modulo_preguntas/app.component.preguntas";

@Component({
  selector: 'app-respuesta',
  providers: [APIservice, appComponentPreguntas],  
  templateUrl: './app.component.respuestas.html'
}) 
 
export class appComponentRespuestas implements OnInit {
  showHide:boolean;
  @Input() public RespuestaMulti: string;  
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
  @Input() public SubRespuestaNivel1: string;
  @Input() public SubRespuestaNivel2: string;
  @Input() public SubRespuestaNivel3: string;  
  @Input() public SubRespuestaNivel1Origen1: string;
  @Input() public SubRespuestaNivel2Origen1: string;  
  @Input() public SubRespuestaNivel3Origen1: string;    
  @Input() public SubRespuestaNivel1Uni1: string;         
  @Input() public SubRespuestaNivel1Uni2: string;
  @Input() public SubRespuestaNivel2Uni1: string;
  @Input() public SubRespuestaNivel2Uni2: string;
  @Input() public SubRespuestaNivel3Uni1: string;
  @Input() public SubRespuestaNivel3Uni2: string;
  

  public radioGroupForm: FormGroup;
  public isCollapsed = true;
  public checkboxGroupForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private apiservice : APIservice) {

    this.showHide = false;
    
  }
  
  cuestionarios:survey[];
  
  changeShowStatus(){
    this.showHide = !this.showHide;
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
