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
  
  @Input () indice :number;     
  //old---respuestas:Array<Cuesto2>;
  //respuestas:Cuesto2[];
  cuesto2:Cuesto2[]=[];
  cuestionarios=[];   
  public errorMessage;
  public response;
  constructor(private apiservice : APIservice )  {} 
   
  loadComments2(){
    let that =this; 
    this.apiservice.getComments2()
      .subscribe(
        cuestionarios =>{
          let i:number;
          let j:number;                 
          cuestionarios.forEach((element) => {                
            let aux:  Array<Object>= []    
            let aux2: Array<Object>= []              
            //console.log(element);

              for( i = 0; i < 10; i++)
              { 
                // console.log(element["idRespuesta" + (i+1)]);
                aux[i] = element["idRespuesta" + (i+1)];                 
                // console.log(aux[i]);
              }
              for( j = 0; j < 3; j++)
              { 
                aux2[j] = element["idSubrespNivel" + (j+1)];                 
              }

            let a=new survey(
              element.id,
              element.idPregunta,
              element.idSubrespNivel1,
              element.idSubrespNivel2,
              element.idSubrespNivel3,
              aux2,		
              element.idTipocuestionario,
              aux
             );
          that.cuestionarios.push(a);
          //console.log(a);
          });
          //this.cuestionarios=cuestionarios
          this.apiservice.numResp = cuestionarios.length;
          this.apiservice.initRespuestas();
           } ,
           err => {
               console.log(err);
                   });
  } 

  ngOnInit(){ 
    this.loadComments2();
    //console.log(this.cuesto2);
    // this.cuesto2=[{resp:1[
     // {subresp:1}]] 
    
  }

  toResp(){ 
    console.log(this.apiservice.respuestas);
   /** console.log($index);
    console.log(this.apiservice.respuestas[$index].resp);    
    this.apiservice.respuestas[$index].resp=this.cuesto2[$index].resp;  **/  
  }
  toSubresp($index,$value){
    /*console.log($index);
    console.log($value);    
    console.log(this.apiservice.respuestas[$index].subresp);          
    this.apiservice.respuestas[$index].subresp.push($value);*/
    //console.log(this.apiservice.respuestas);  
  }
}
