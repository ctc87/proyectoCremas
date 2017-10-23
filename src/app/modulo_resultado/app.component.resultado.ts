import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { APIservice } from '../servicioAPI/app.servicioAPI';
import { Productos } from '../constructor.productos';
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UniquePipe } from '../pipes/app.pipe.preguntas';

@Component({
  selector: 'app-resultado',
  providers: [APIservice],
  templateUrl: './app.component.resultado.html',
})  

export class appComponentResultado implements OnInit { 
  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private apiservice : APIservice,
  ) {}

  public Resp1:number;
  public Resp2:number;
  public Resp3:number;
  public Resp4:number;
  public Resp5:number;
  public Subresp51:number;
  public Subresp52:number;  
  public Subresp53:number;
  productoss:Productos[]
  
  loadComments3(){
    this.apiservice.getComments3()
       .subscribe(
        productoss => this.productoss=productoss,
           err => {
               console.log(err);
                   });
} 

onUrl(param){
  window.location.href=param;    
}

  ngOnInit() {
    this.loadComments3();     
       this.route.params.subscribe(params => {
        if(params['resp1']!=null){
          this.Resp1 = params['resp1']; 
        }
        if(params['resp2']!=null){
          this.Resp2 = params['resp2']; 
        }
        if(params['resp3']!=null){
          this.Resp3 = params['resp3']; 
        }
        if(params['resp4']!=null){
          this.Resp4 = params['resp4']; 
        }
        if(params['resp5']!=null){
          this.Resp5 = params['resp5']; 
        }        
        if(params['subresp51']!=null){
          this.Subresp51 = params['subresp51']; 
        }  
        if(params['subresp52']!=null){
          this.Subresp52 = params['subresp52']; 
        }    
        if(params['subresp53']!=null){
          this.Subresp53 = params['subresp53']; 
        }           
     });

  }
}