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
  selector: 'app-subrespuesta-nivel3',
  providers: [APIservice, appComponentPreguntas],  
  templateUrl: './app.component.subrespuestas.html'
}) 
 
export class appComponentSubRespuestasNivel3 implements OnInit {
   
 
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private apiservice : APIservice) {}
  
  cuestionarios:survey[];
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
