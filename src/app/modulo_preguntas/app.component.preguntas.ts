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
import { survey } from '../constructor.survey';
import { Router } from "@angular/router";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preguntas',
  providers: [NgbCarouselConfig],
  templateUrl: './app.component.preguntas1.html',
})  

export class appComponentPreguntas implements OnInit{ 
    
    constructor(
        private apiservice : APIservice, private modalService: NgbModal,
        private router: Router,
        config: NgbCarouselConfig
    ){
        config.interval = 0;
        config.wrap = true;
        config.keyboard = true;  
    }

    public errorMessage;
    public response;
    public cuesto:Cuesto;
    cuestionarios:survey[];

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
        /*this.cuesto = {
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
        }    */     

    }  

 }
