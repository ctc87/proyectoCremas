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
     
  respuestas:Cuesto2[];
  cuestionarios=[]; 
  public errorMessage;
  public response;
  constructor(public  apiservice : APIservice )  {} 
   
  loadComments2(){
    let that =this; 
    this.apiservice.getComments2()
       .subscribe(
           cuestionarios =>{
              let i:number;
              let j:number;   
              cuestionarios.forEach((element) => {
              let aux: Array<Object>= [];
              let aux2: Array<Object>= [];             
              let NUMERO_SUBNIVELES = 6;
              for( i = 0; i < 10; i++) { 
                aux[i] = element["idRespuesta" + (i+1)];                 
              }
              for( j = 0; j < NUMERO_SUBNIVELES; j++) { 
                aux2[j] = element["idSubrespNivel" + (j+1)];                 
              }
              if(element.id == 3) {
                that.apiservice.DescripcionesConsejos = [];
               for(let i = 1; i < 6 ; i++) {
                 that.apiservice.DescripcionesConsejos.push(element["idRespuesta" + i]);
               }
                
              }
              that.apiservice.preguntas.push({pregunta:element.idPregunta.pregunta, id:element.idPregunta.id})
              let a=new survey(
                element.id,
                element.idPregunta,
                element.idSubrespNivel1,
                element.idSubrespNivel2,
                element.idSubrespNivel3,
                element.idSubrespNivel4,
                element.idSubrespNivel5,
                element.idSubrespNivel6,
                aux2,
                element.idTipocuestionario,
                aux
             );
              that.cuestionarios.push(a);
             });
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
    this.apiservice.showButton();
  }
  
  
  rellenarRespuestas(indice, valor, j, respuestaTexto) {
    this.apiservice.respuestas[indice].resp = valor;
    this.apiservice.respuestas[indice].tituloResp = respuestaTexto;
    // console.log(valor, respuestaTexto)
    for(let i = 0; i < this.apiservice.btnSlected[indice].length; i++) {
      if(i == j) {
        this.apiservice.btnSlected[indice][i] = true; 
      } else {
        this.apiservice.btnSlected[indice][i] = false; 
      }
  }
    this.nextSlide();
  }
  
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  nextSlide() {
    let that = this;
    setTimeout(()=>{   
        that.carousel.next();
    },500);
  }

  toSet(indice,indiceJ){  
    let len = this.apiservice.respuestas[indice].subresp;
    for (var index = indiceJ; index < len.length; index++) {
      len[index].id = 1;     
    }
  
}


  onChange(newValue, i, elementRoot, esSubrespuesta, j) {
    let texto;
    if(!esSubrespuesta) {
    let arrayFiltrado = elementRoot.filter(
          element => Number(element.id) === Number(newValue)
    );
    
      this.apiservice.respuestas[i].resp = newValue;
      texto = arrayFiltrado[arrayFiltrado.length - 1].respuesta
      this.apiservice.respuestas[i].tituloResp = texto;
    } else {
      texto = Number(elementRoot.idsubrespuesta1.id) === Number(newValue) ?  elementRoot.idsubrespuesta1.respuesta :  elementRoot.idsubrespuesta2.respuesta;
      this.apiservice.respuestas[i].subresp[j].texto = texto;
    }
    // console.log(newValue)
    // console.log(texto)
  }
}
