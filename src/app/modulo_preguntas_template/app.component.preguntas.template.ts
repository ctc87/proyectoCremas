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
  @Input () carousel;
     
  //respuestas:Array<Cuesto2>;
  respuestas:Cuesto2[];
  cuestionarios=[]; 
  // cuestionarios_sin_vacias=[];   
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
             });
            // this.crearArraySinOpcionesVacias();
            this.apiservice.numResp = this.cuestionarios.length;
            this.apiservice.initRespuestas();
            for(let i = 0; i < this.cuestionarios.length; i++) {
              this.apiservice.btnSlected[i] = [];
              for(let j = 0; j < this.cuestionarios[i].idrespuestas.length; j++) {
                Number(this.cuestionarios[i].idrespuestas[j].respuesta) != 0 ? this.apiservice.btnSlected[i].push(false) : null;
              }
            }     
           } ,
           err => {
               console.log(err);
                   });
  } 

  ngOnInit(){ 
    this.loadComments2();
  }
  
  toResp(){ 
    console.log(this.apiservice.respuestas);
  }
  // toSubresp($resp){
  // }
  
  
  // crearArraySinOpcionesVacias() {
  //   let that = this;
  //   that.cuestionarios_sin_vacias = that.cuestionarios.slice();
  //   that.cuestionarios_sin_vacias.forEach( (element, index) => {
  //       that.cuestionarios_sin_vacias[index].idrespuestas = element.idrespuestas.filter(function(respuesta){
  //         return Number(respuesta.respuesta) != 0;
  //       });
  //   });
  // }
  
  rellenarRespuestas(indice, valor, j) {
    this.apiservice.respuestas[indice].resp = valor;
    for(let i = 0; i < this.apiservice.btnSlected[indice].length; i++) {
      if(i == j) {
        this.apiservice.btnSlected[indice][i] = true; 
      } else {
        this.apiservice.btnSlected[indice][i] = false; 
      }
  }
    // this.carousel.next()
  }
  
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  nextSlide() {
    // setTimeout(()=>{   
    //     this.carousel.next();
    // },500);
  }

  toSet(indice,indiceJ){  
    let len = this.apiservice.respuestas[indice].subresp;
    for (var index = indiceJ; index < len.length; index++) {
      //var element = indiceJ[index]; 
      len[index] = 1;     
    }
  
    console.log( this.apiservice.respuestas[indice]);
  }

}
