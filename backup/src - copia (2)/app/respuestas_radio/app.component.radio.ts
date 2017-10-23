import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { quest } from '../constructor.quest';
import { resp } from '../constructor.resp';
import { survey } from '../constructor.survey';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIservice  } from '../servicioAPI/app.servicioAPI';
import { Pipe, PipeTransform } from '@angular/core';
import { UniquePipe } from './app.pipe.preguntas';
import { ResPipe } from './app.pipe.respuestas';
//import { KeysPipe } from './app.pipe.array';

@Component({
  selector: 'app-preguntas',
  providers: [APIservice],
  templateUrl: './app.component.respuestas.html' 
  
})

export class appComponentRadio implements OnInit{ 
 
    constructor(
        private apiservice : APIservice
        ){}    

    preguntas:quest[];
    cuestionarios:survey[];
    //respuestas:resp[];
 
    loadComments(){
         this.apiservice.getComments()
                           .subscribe(
                               preguntas => this.preguntas=preguntas, //Bind to view
                                err => {
                                    console.log(err);
                                });
    }

    loadComments2(){
         this.apiservice.getComments2()
                           .subscribe(
                               cuestionarios => this.cuestionarios=cuestionarios, //Bind to view
                                err => {
                                    console.log(err);
                                });
    }/*
    
    loadComments3(){
         this.apiservice.getComments3()
                           .subscribe(
                               respuestas => this.respuestas=respuestas, //Bind to view
                                err => {
                                    console.log(err);
                                });
    }*/


    ngOnInit(){
            this.loadComments()
            this.loadComments2()
    }
  
    /*  ngOnInit3(){
            this.loadComments3()
    }*/
 }


//----------------------------------------


/*export class appComponentRadio    
 { 
    constructor(private _aPIservice:APIservice){}*/
 /*
export class appComponentRadio  {
  
preguntas: string;
 
    constructor(private http:Http) {
        this.http.get("http://localhost/hydradermica/web/app_dev.php/conexion")
                .subscribe(res => this.preguntas = res.json());

  }
            
}

------------------------------------------
import { Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommentBoxComponent } from './comment-box.component';
import { Comment } from '../model/comment';
import {CommentService} from '../services/comment.service';
import { EmitterService } from '../../emitter.service';

preguntas:quest[];
  constructor()
    {
    this.preguntas = [
      new quest(0, '¿Considera que el barraquito está demasiado caro?'),
      new quest(1, '¿Considera que el bocadillo de pollo "con todo", no debería tener todo?'),
      new quest(2, '¿Considera que detras del ultimo no venía nadie?')
    ];

  }*/
