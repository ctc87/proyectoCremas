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
   
  ) {
    this.returnHome();
    }
 
  
  public isCollapsed = true;
  public respuestas = [];
  postItems: PostItem[];
  public aceptadosTerminos = false;
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
    that.respuestas.push({respuesta:element.resp, subrespuestas:element.subresp})
  });
 
}

  ngOnInit() {
    console.log(this.apiservice.consejos.split('<br/>'))
    let that = this;
    this.loadComments3(function(productoss){
      that.route.params.subscribe(params => {
        that.rellenarRespuestas(params);
        let resp = that.apiservice.respuestas;
        that.postItems = that.postService.getAllPosts(that.productoss, resp, that.httpConbinaciones);
        that.postItems.forEach(function(element, index) {
            that.postService.loadComponent(that.myPostDirective.viewContainerRef, element);

        });
      });
    });     
     
    }
     returnHome() {
        if(!this.apiservice.resultadosMostrar)
            this.router.navigate(['/']) ;
    }
    
    emailValido() {
      let mailREGXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !mailREGXP.test(this.apiservice.mail)
    }
    
}