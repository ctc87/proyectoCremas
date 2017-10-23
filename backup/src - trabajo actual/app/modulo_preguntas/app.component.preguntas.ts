import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { survey } from '../constructor.survey';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Quest } from '../quest.interface';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIservice  } from '../servicioAPI/app.servicioAPI';
import { Pipe, PipeTransform } from '@angular/core';
import { UniquePipe } from '../pipes/app.pipe.preguntas';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preguntas',
  providers: [APIservice],
  templateUrl: './app.component.preguntas.html'
})  
 
export class appComponentPreguntas implements OnInit{ 
    
    quest:Quest={
        id:"",
        resp1:"",
        resp2:"",
    }   

    constructor(
        private apiservice : APIservice, private modalService: NgbModal){}
    
    cuestionarios:survey[];
  
    getNotification1(evt) {
        console.log(evt);
        this.quest.resp1=evt;       
    }

    getNotification2(evt2) {
        console.log(evt2);
        this.quest.resp2=evt2;
    }
  
    OnSubmit() 
    {
        console.log(this.quest);
        this.apiservice.putQuest(this.quest).
        subscribe(data=>{            
                        });

    }   

   loadComments2(){
         this.apiservice.getComments2()
            .subscribe(
                cuestionarios => this.cuestionarios=cuestionarios,
                err => {
                    console.log(err);
                        });
    } 

    open(content) {
        this.modalService.open(content)          
    }

    ngOnInit(){
        this.loadComments2(); 
    }  

 }
