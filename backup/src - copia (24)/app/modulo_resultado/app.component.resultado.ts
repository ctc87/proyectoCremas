import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { APIservice  } from '../servicioAPI/app.servicioAPI';

@Component({
  selector: 'app-resultado',
  //providers: [APIservice],
  template: `
  Resultado Respuesta1:   {{Resp1}}<br>
  Resultado Respuesta2:   {{Resp2}}<br>
  Resultado Respuesta3:   {{Resp3}}<br>
  Resultado Respuesta4:   {{Resp4}}<br>
  Resultado Respuesta5:   {{Resp5}}<br>   
  Resultado Subrespuesta1:{{Subresp11}}


  <div *ngIf="Resp3==8 || Resp3==9">
  Producto elegido: 
  HD GLICODERM CREAM
  HD DEEP INTENSE CARE
  </div>`
})  

export class appComponentResultado  { 
  public Resp1:string;
  public Resp2:string;
  public Resp3:string;
  public Resp4:string;
  public Resp5:string;
  public Subresp11:string;

  constructor(
   private route: ActivatedRoute,
   private router: Router
  ) {}

  ngOnInit() {
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
        if(params['subresp11']!=null){
            this.Subresp11 = params['subresp11']; 
        }
     });



  }
}