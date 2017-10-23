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
  selector: 'app-respuesta-unica',
  providers: [APIservice, appComponentPreguntas],  
  templateUrl: './app.component.respuestas.html'
}) 
 
export class appComponentRespuestaUnica implements OnInit {
  showHide:boolean;
  @Input() public RespuestaUni1: string;
  @Input() public RespuestaUni2: string;
  @Input() public RespuestaUni3: string;
  @Input() public RespuestaUni4: string;
  @Input() public RespuestaUni5: string;
  @Input() public RespuestaUni6: string;
  @Input() public RespuestaUni7: string;
  @Input() public RespuestaUni8: string;
  @Input() public RespuestaUni9: string;
  @Input() public RespuestaUni10: string;
  @Input() public SubRespuestaOrigen1: string;
  @Input() public SubRespuestaOrigen2: string;
  @Input() public SubRespuestaOrigen3: string;  
  @Input() public SubRespuestaOrigen1Uni1: string;         
  @Input() public SubRespuestaOrigen1Uni2: string;
  @Input() public SubRespuestaOrigen2Uni1: string;
  @Input() public SubRespuestaOrigen2Uni2: string;
  @Input() public SubRespuestaOrigen3Uni1: string;
  @Input() public SubRespuestaOrigen3Uni2: string;
  

  public radioGroupForm: FormGroup;
  public isCollapsed = true;
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
  }



}
