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
     
  //respuestas:Array<Cuesto2>;
  respuestas:Cuesto2[];
  cuestionarios=[]; 
  cuestionarios_sin_vacias=[];   
  public errorMessage;
  public response;
  nombreSubResp:any[];
  constructor(private apiservice : APIservice )  {} 
   
  loadComments2(){
    let that =this; 
    this.apiservice.getComments2()
       .subscribe(
           cuestionarios =>{
              let i:number;   
              cuestionarios.forEach((element) => {
              let aux: Array<Object>= []              

              for( i = 0; i < 10; i++)
                { 
                // console.log(element["idRespuesta" + (i+1)]);
                aux[i] = element["idRespuesta" + (i+1)];                 
                // console.log(aux[i]);
                }
              let a=new survey(
                element.id,
                //element.idRespuesta,                
                element.idPregunta,
               // element.idrespuestaOrigen,
                //element.idPregunta.pregunta,
                element.idSubrespNivel1,
                element.idSubrespNivel2,
                element.idSubrespNivel3,
                //element.idRespuesta,
                //element.idSubrespuesta,
                element.idTipocuestionario,
                aux
             );
              that.cuestionarios.push(a);
             });
             this.crearArraySinOpcionesVacias();
            //console.log(cuestionarios[0]["idRespuesta"  + i].id);
            //this.cuestionarios=cuestionarios

           } ,
           err => {
               console.log(err);
                   });
  } 

  ngOnInit(){ 
    this.loadComments2();
  }
  
  toResp($resp){ 
    this.apiservice.respuestas[$resp]=this.cuesto2.resp;    
  }
  toSubresp($resp){
    //console.log(this.cuesto2);    
    //this.apiservice.respuestas[$resp].subresp.push(this.cuesto2.subresp);
    //console.log(this.apiservice.respuestas); 
  
  
  
   // images.push(new Array());

  }
  
  
  crearArraySinOpcionesVacias() {
    let that = this;
    that.cuestionarios_sin_vacias = that.cuestionarios.slice();
    that.cuestionarios_sin_vacias.forEach( (element, index) => {
        that.cuestionarios_sin_vacias[index].idrespuestas = element.idrespuestas.filter(function(respuesta){
          return Number(respuesta.respuesta) != 0;
        });
    });
  }
  
  
}
