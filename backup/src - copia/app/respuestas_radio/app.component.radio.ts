import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { quest } from '../cuestionario';
import { survey } from '../cuestionario2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIservice  } from '../servicioAPI/app.servicioAPI';
import { Pipe, PipeTransform } from '@angular/core';
import {  UniquePipe } from './app.pipe.preguntas';

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
    cuestionario:survey[];

 
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
                               cuestionario => this.cuestionario=cuestionario, //Bind to view
                                err => {
                                    console.log(err);
                                });
    }


    ngOnInit(){
            this.loadComments()
    }
    ngOnInit2(){
            this.loadComments2()
    }
    
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
