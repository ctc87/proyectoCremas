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
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//-------------------------
import { NgForm } from '@angular/forms';
import { Cuesto } from '../quest.interface';
import { Router } from "@angular/router";
import { respuestasFor } from '../respuestasFor.interface';

@Component({
  selector: 'app-preguntas',
  providers: [APIservice],
  templateUrl: './app.component.preguntas.html',
})  

export class appComponentPreguntas implements OnInit{ 
    constructor(
        private apiservice : APIservice, private modalService: NgbModal,
        private router: Router
    ){
        this.showHide1  = false;
        this.showHide2 = false;
    }

    showHide1:boolean; 
    showHide2:boolean; 
    
    public cuesto:Cuesto;
    
    OnSubmit(/*f: Cuesto*/) {           
        console.log(/*f*/this.cuesto);
        //this.apiservice.putQuest( this.cuesto ).subscribe(data=>{})
    } 

    cuestionarios:survey[];

    changeShowStatus1(){
        this.showHide1 = !this.showHide1;  
        this.showHide2 = false;     
    }

    changeShowStatus2(){
        this.showHide2 = !this.showHide2;   
        this.showHide1 = false;     
        
    }

    onReset1() {  
        this.ngOnInit2()
        }  
    onReset2() {  
        this.ngOnInit3()
    }  
    onReset3() {  
        this.ngOnInit4()
    } 
   
    goHome(resp1,resp2,resp3,resp4,resp5,subresp11,subresp12,subresp13,subresp14,subresp15){
        this.router.navigate(['/resultado',resp1,resp2,resp3,resp4,resp5,subresp11,subresp12,subresp13,subresp14,subresp15]);
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
        this.cuesto = {
            id:0,
            resp1:null,
            resp2:null,
            resp3:null,
            resp4:null,
            resp5:null,
            subresp11:null,
            subresp12:null,
            subresp13:null,
            subresp14:null,
            subresp15:null,
        }  
    }  

    ngOnInit2(){ 
        this.cuesto.subresp11 =null;
        this.cuesto.subresp12 =null;
        this.cuesto.subresp13 =null;
        this.cuesto.subresp14 =null;
        this.cuesto.subresp15 =null;
    }  
    ngOnInit3(){ 
        this.cuesto.subresp12 =null;
        this.cuesto.subresp13 =null;
        this.cuesto.subresp14 =null;
        this.cuesto.subresp15 =null;
    }  
    ngOnInit4(){ 
        this.cuesto.subresp13 =null;
        this.cuesto.subresp14 =null;
        this.cuesto.subresp15 =null;   
    }  

 }
