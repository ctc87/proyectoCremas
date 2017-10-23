import {Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import {FormBuilder, FormGroup,NgForm} from '@angular/forms';
import { APIservice } from '../servicioAPI/app.servicioAPI';
import { survey } from '../constructor.survey';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs/Subscription";
import { Quest } from '../quest.interface';

@Component({
  selector: 'app-respuesta',
  providers: [APIservice], 
  templateUrl: './app.component.respuestas.html'
})  
 
export class appComponentRespuestas implements OnInit {
  
  public p:string;

    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    
    sendNotification(p) {
        this.notifyParent.emit(p);
    } 

  @Input() public RespuestaMulti: number;  
  @Input() public Respuesta1: string;
  @Input() public Respuesta2: string;
  @Input() public Respuesta3: string;
  @Input() public Respuesta4: string;
  @Input() public Respuesta5: string;
  @Input() public Respuesta6: string;
  @Input() public Respuesta7: string;
  @Input() public Respuesta8: string;
  @Input() public Respuesta9: string;
  @Input() public Respuesta10: string; 
  @Input() public IdCuestionarioNivel11: string; 
  @Input() public IdCuestionarioNivel12: string; 
  @Input() public IdCuestionarioNivel211: string; 
  @Input() public IdCuestionarioNivel212: string; 
  @Input() public IdCuestionarioNivel221: string; 
  @Input() public IdCuestionarioNivel222: string; 
  @Input() public IdCuestionarioNivel3111: string; 
  @Input() public IdCuestionarioNivel3112: string; 
  @Input() public IdCuestionarioNivel3121: string; 
  @Input() public IdCuestionarioNivel3122: string; 
  @Input() public IdCuestionarioNivel3211: string; 
  @Input() public IdCuestionarioNivel3212: string; 
  @Input() public IdCuestionarioNivel3221: string; 
  @Input() public IdCuestionarioNivel3222: string; 
  @Input() public IdCuestionarioNivel41111: string; 
  @Input() public IdCuestionarioNivel41112: string; 

  public radioGroupForm: FormGroup;
  public checkboxGroupForm: FormGroup;

  showHide:boolean; 
  showHide1:boolean;
  showHide2:boolean;
  showHide3:boolean;
  showHide4:boolean;
  showHide5:boolean;
  showHide6:boolean;
  showHide7:boolean;
  showHide8:boolean;
  showHide9:boolean;
  showHide10:boolean;  
  
  constructor(private formBuilder: FormBuilder,private apiservice : APIservice) {
    this.showHide = false;      
    this.showHide1 = false;  
    this.showHide2 = false; 
    this.showHide3 = false; 
    this.showHide4 = false; 
    this.showHide5 = false; 
    this.showHide6 = false; 
    this.showHide7 = false; 
    this.showHide8 = false; 
    this.showHide9 = false; 
    this.showHide10 = false;    
  }  
  cuestionarios:survey[];  
  
  changeShowStatus1(){
    this.cerrarTodos()    
    this.showHide1 = !this.showHide1;       
  }
  changeShowStatus2(){
    this.cerrarTodos()
    this.showHide2 = !this.showHide2;
  }
  changeShowStatus3(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide3;       
  }
  changeShowStatus4(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide4;       
  }
  changeShowStatus5(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide5;       
  }
  changeShowStatus6(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide6;       
  }
  changeShowStatus7(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide7;       
  }
  changeShowStatus8(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide8;       
  }
  changeShowStatus9(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide9;       
  }
  changeShowStatus10(){
    this.cerrarTodos()
    this.showHide3 = !this.showHide10;       
  }

  cerrarTodos(){
    this.showHide1 = false;
    this.showHide2 = false;
    this.showHide3 = false;       
    this.showHide4 = false;
    this.showHide5 = false;
    this.showHide6 = false;
    this.showHide7 = false;
    this.showHide8 = false;
    this.showHide9 = false;
    this.showHide10 = false;
  }
  
  loadComments2(){
    this.apiservice.getComments2()
                      .subscribe(
                          cuestionarios => this.cuestionarios=cuestionarios, //Bind to view
                           err => {
                               console.log(err);
                           });
} 

  ngOnInit() {
    this.loadComments2()
    
    this.radioGroupForm = this.formBuilder.group({
       'model':0
    }); 

    this.checkboxGroupForm  = this.formBuilder.group({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false      
    }); 
  }

}
