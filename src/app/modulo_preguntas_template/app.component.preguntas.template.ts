import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-preguntas-template',  
  templateUrl: './app.component.preguntas.template.html',
})  

export class appComponentPreguntasTemplate { 
   
   @Input () indice :number;
   @Input () pregunta :string;
   @Input () respu1 :string;
   @Input () respu2 :string;
   @Input () respu3 :string;
   @Input () respu4 :string;
   @Input () respu5 :string;
   @Input () respu6 :string;
   @Input () respu7 :string;
   @Input () respu8 :string;
   @Input () respu9 :string;
   @Input () respu10 :string;
   constructor() {}
 }
