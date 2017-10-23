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
  selector: 'app-subrespuesta',
  providers: [APIservice, appComponentPreguntas],  
  templateUrl: './app.component.subrespuestas.html'
}) 
 
export class appComponentSubRespuestas implements OnInit {
   
 
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private apiservice : APIservice) {}
  
  cuestionarios:survey[];
  @Input() public SubRespuestaNivel1: string; 
  @Input() public SubRespuestaNivel2: string;
  @Input() public SubRespuestaNivel3: string;  
  @Input() public SubRespuestaNivel1Uni1: string;
  @Input() public SubRespuestaNivel1Uni2: string;
  @Input() public SubRespuestaNivel2Uni1: string;
  @Input() public SubRespuestaNivel2Uni2: string;
  @Input() public SubRespuestaNivel3Uni1: string;
  @Input() public SubRespuestaNivel3Uni2: string;
  @Input() public SubRespuestaNivel1Origen1: string;  
  @Input() public SubRespuestaNivel2Origen1: string;  
  @Input() public SubRespuestaNivel3Origen1: string;  
  
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
