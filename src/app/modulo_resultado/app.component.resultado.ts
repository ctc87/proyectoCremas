import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { APIservice } from '../servicioAPI/app.servicioAPI';
import { MyPostService  } from '../servicioAPI/mypost.service';
import { HttpConbinaciones } from '../servicioAPI/app.servicioHttpConbinaciones';
import { Productos } from '../constructor.productos';
import { Producto } from './productos/app.component.producto';
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UniquePipe } from '../pipes/app.pipe.preguntas';
import { MyPostComponent } from './componente_post/mypost.component';
import { MyPostDirective } from '../directivas/mypost.directive';
import { PostItem } from './contenedorPostItem/post-item';

@Component({
  selector: 'app-resultado',
  providers: [APIservice],
  templateUrl: './app.component.resultado.html',
  styleUrls: ['./app.component.resultado.css']
})  

export class appComponentResultado implements OnInit { 
  
  @ViewChild(MyPostDirective)
  private myPostDirective: MyPostDirective;	
	
  @ViewChild(MyPostComponent)
  private myPostComponent: MyPostComponent;
  
  constructor(
   private route: ActivatedRoute,
   private router: Router,
   private apiservice : APIservice,
   private httpConbinaciones: HttpConbinaciones,
   private postService: MyPostService,
   
  ) {}
 

  public Resp1:number;
  public Resp2:number;
  public Resp3:number;
  public Resp4:number;
  public Resp5:number;
  public Subresp51:number;
  public Subresp52:number;  
  public Subresp53:number;
  
  public respuestas = [];
  postItems: PostItem[];
  
  
  
  
  
  productoss:Productos[];
  productos = [];
  
  loadComments3(callback){
    let that = this;
    this.apiservice.getComments3()
       .subscribe(
       productoss => this.productoss=productoss,
       err => {
               console.log(err);
         },
           () => {
            callback(that.productoss);
           }
    );
    
    
} 

onUrl(param){
  window.location.href=param;    
}


rellenarRespuestas(params) {
  let that = this;
  this.apiservice.respuestas.forEach(function(element, index){
    console.log(that.respuestas);
    console.log(that.apiservice.respuestas);
    
  });
  //   that.respuestas[0] = {};
  //   that.respuestas[0].respuesta = params['resp1']; 

  // if(params['resp2']!=null){
  //   that.respuestas[1] = {};
  //   that.respuestas[1].respuesta = params['resp2'];
  //   that.Resp2 = params['resp2']; 
  // }
  // if(params['resp3']!=null){
  //   that.respuestas[2] = {};
  //   that.respuestas[2].respuesta = params['resp3'];
  //   that.Resp3 = params['resp3']; 
  // }
  // if(params['resp4']!=null){
  //   that.respuestas[3] = {};
  //   that.respuestas[3].respuesta = params['resp4'];
  //   that.Resp4 = params['resp4']; 
  // }
  // if(params['resp5']!=null){
  //   that.respuestas[4] = {};
  //   that.respuestas[4].respuesta = params['resp5'];
  //   that.Resp5 = params['resp5']; 
  // }        
  // if(params['subresp51']!=null){
  //   that.respuestas[4].subrespuestas = [];
  //   that.respuestas[4].subrespuestas[0] = params['subresp51'];
  //   that.Subresp51 = params['subresp51']; 
  // }  
  // if(params['subresp52']!=null){
  //   that.respuestas[4].subrespuestas[1] = params['subresp52'];
  //   that.Subresp52 = params['subresp52']; 
  // }    
  // if(params['subresp53']!=null){
  //   that.respuestas[4].subrespuestas[2] = params['subresp53'];
  //   that.Subresp53 = params['subresp53']; 
  // }
}

  ngOnInit() {
    let that = this;
    this.loadComments3(function(productoss){
      that.route.params.subscribe(params => {
        console.log("PARAMS")
        console.log(that.apiservice.respuestas)
        that.rellenarRespuestas(params);
        console.log(that.productoss);   
        let resp = that.respuestas;
        that.postItems = that.postService.getAllPosts(that.productoss, resp, that.httpConbinaciones);
        that.postItems.forEach(function(element, index) {
            that.postService.loadComponent(that.myPostDirective.viewContainerRef, element);

        });
        
        console.log(that.postItems)
      });
    });     
     
    }
}