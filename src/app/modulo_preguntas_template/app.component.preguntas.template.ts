import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIservice } from '../servicioAPI/app.servicioAPI';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Cuesto } from '../quest.interface';
import { Cuesto2 } from '../quest2.interface';
import { Router } from "@angular/router";
import { survey } from '../constructor.survey';

@Component({
  selector: 'app-preguntas-template',  
  templateUrl: './app.component.preguntas.template.html',
})  

export class appComponentPreguntasTemplate implements OnInit  { 
   cuesto2;
   @Input () indice :number;
   /*@Input () pregunta :string;
   @Input () respu1 :string;
   @Input () respu2 :string;
   @Input () respu3 :string;
   @Input () respu4 :string;
   @Input () respu5 :string;
   @Input () respu6 :string;
   @Input () respu7 :string;
   @Input () respu8 :string;
   @Input () respu9 :string;
   @Input () respu10 :string;
   @Input () subrespu1Origen :number;
   @Input () subrespu2Origen :number;
   @Input () subrespu3Origen :number;
   @Input () subrespu11 :string;
   @Input () subrespu12 :string;
   @Input () subrespu21 :string;
   @Input () subrespu22 :string;
   @Input () subrespu31 :string;
   @Input () subrespu32 :string;*/
   
   //respuestas:Array<Cuesto2>;
   respuestas:Cuesto2[];
   cuestionarios:survey[];   
   public errorMessage;
   public response;

   constructor(private apiservice : APIservice )  {
    /* let cuesto2=new Cuesto2(5,2,5,23) ;
     //let cuesto2=new Cuesto2(resp,r,r,r) ;
     console.log(resp);
     this.apiservice.respuestas.push(cuesto2);     
     //this.apiservice.respuestas.push(cuesto2);
     console.log(cuesto2);
     console.log(apiservice.respuestas);*/
    } 
   
   loadComments2(){
    this.apiservice.getComments2()
       .subscribe(
           cuestionarios => this.cuestionarios=cuestionarios,
           err => {
               console.log(err);
                   });
} 

   ngOnInit(){ 
   // let cuesto2;//=new Cuesto2(5,2,5,23) ;
    //let cuesto2=new Cuesto2(resp,r,r,r) ;
    //this.apiservice.respuestas.push(cuesto2);    
    //this.apiservice.respuestas.push(cuesto2);
    this.loadComments2();
    this.cuesto2 = {
      resp:1
    }  
    //this.apiservice.respuestas.push(cuesto2[0]);
    //console.log(cuesto2);
    //this.apiservice.respuestas.push(this.cuesto2.resp);
    console.log(this.apiservice.respuestas);
    console.log(this.cuesto2.resp);

   }

   toNumber(){
    //this.cuesto2 = +this.cuesto2;
    this.apiservice.respuestas[0]=this.cuesto2.resp;
    console.log(this.cuesto2.resp);
    console.log(this.apiservice.respuestas);
  }
  }
