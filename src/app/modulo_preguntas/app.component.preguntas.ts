import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIservice  } from '../servicioAPI/app.servicioAPI';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Cuesto } from '../quest.interface';
import { survey } from '../constructor.survey';
import { Router } from "@angular/router";

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
        this.showHide1b = false;
        this.showHide2  = false;        
    }

    public errorMessage;
    public response;
    public cuesto:Cuesto;
    cuestionarios:survey[];
    showHide1:boolean; 
    showHide1b:boolean; 
    showHide1c:boolean; 
    showHide1d:boolean; 
    showHide1e:boolean; 
    showHide1f:boolean; 
    showHide2:boolean;    
    showHide2b:boolean;     
    
    OnSubmit() {          
        this.apiservice.putQuest(this.cuesto).
        subscribe(response=>{
                            console.log(response);
                            },
                    error=>{
                            this.errorMessage = <any>error;
                                if(this.errorMessage!=null)
                                {
                                console.log(this.errorMessage);
                                }                  
                            })        
    } 

    changeShowStatus1(){
        this.changeShowStatusTotal()        
        this.showHide1  = !this.showHide1; 
    }

    changeShowStatus1b(){
        this.changeShowStatusTotal()
        this.showHide1b = !this.showHide1b;             
    }

    changeShowStatus1c(){
        this.showHide1c = !this.showHide1c;
        this.showHide1d = false;               
        this.showHide1e = false; 
        this.showHide1f = false;          
        this.showHide2  = false;     
    }
    changeShowStatus1d(){
        this.showHide1c = false;        
        this.showHide1d = !this.showHide1d;
        this.showHide1e = false; 
        this.showHide1f = false;  
        this.showHide2  = false;     
    }
    changeShowStatus1e(){
        this.showHide1c = false;
        this.showHide1d = false;       
        this.showHide1e = !this.showHide1e;   
        this.showHide1f = false;     
        this.showHide2  = false;     
    }
    changeShowStatus1f(){
        this.showHide1c = false;
        this.showHide1d = false;       
        this.showHide1e = false;
        this.showHide1f = !this.showHide1f;       
        this.showHide2  = false;     
    }

    changeShowStatus2(){
        this.showHide2  = !this.showHide2;   
        this.showHide1  = false;    
        this.showHide2b = false;  
    }

    changeShowStatus2b(){
        this.showHide1  = false; 
        this.showHide2  = false;  
        this.showHide2b = !this.showHide2b;          
    }

    changeShowStatusTotal(){
        this.showHide1  = false;  
        this.showHide1b = false; 
        this.showHide1c = false;        
        this.showHide1d = false; 
        this.showHide1e = false; 
        this.showHide1f = false;          
        this.showHide2  = false;     
        this.showHide2b = false;     
    }
   
    goHome(resp1,resp2,resp3,resp4,resp5,subresp51,subresp52,subresp53){
        this.router.navigate(['/resultado',resp1,resp2,resp3,resp4,resp5,subresp51,subresp52,subresp53]);
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
            resp1:1,
            resp2:1,
            resp3:1,
            resp4:1,
            resp5:1,
            resp6:1,
            resp7:1,
            resp8:1,
            resp9:1,
            subresp51:1,
            subresp52:1,
            subresp53:1
        }  
    }  

    ngOnInit2(){ 
        this.cuesto.subresp51 =1;
        this.cuesto.subresp52 =1;
        this.cuesto.subresp53 =1;
    }

    ngOnInit3(){ 
        this.cuesto.subresp52 =1;
        this.cuesto.subresp53 =1;
    }

    ngOnInit4(){ 
        this.cuesto.subresp53 =1;
    }

 }
