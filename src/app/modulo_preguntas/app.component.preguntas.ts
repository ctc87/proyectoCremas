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
    
    onSlideClicked(value: any){
        this.apiservice.change(/\d+$/g.exec(value.activeId)[0]);
    }
    
    colorBarraHorizontal(actual, pintar) {
        return ++actual <= pintar ? "grey" : "#234369" ; 
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
