import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
import { UniquePipe } from '../pipes/app.pipe.preguntas';
import { ResPipe } from '../pipes/app.pipe.respuestas';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preguntas',
  providers: [APIservice],
  templateUrl: './app.component.preguntas.html'
})
 

export class appComponentPreguntas implements OnInit{ 
 
    constructor(
        private apiservice : APIservice
        ){}

    cuestionarios:survey[];

   loadComments2(){
         this.apiservice.getComments2()
                           .subscribe(
                               cuestionarios => this.cuestionarios=cuestionarios, //Bind to view
                                err => {
                                    console.log(err);
                                });
    } 

    ngOnInit(){
            this.loadComments2()

    }

 }
