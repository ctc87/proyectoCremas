/*
("http://localhost/hydradermica/web/app_dev.php/conexion")
*/ 

import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { quest } from '../constructor.quest';
import { resp } from '../constructor.resp';
import { survey } from '../constructor.survey'; 
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIservice {

     constructor (private http: Http) {}
    /*private*/public commentsUrl = "http://localhost/hydradermica/web/app_dev.php/conexion"; 
     
    /* getComments() : Observable<quest[]>{

      return this.http.get(this.commentsUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     } */

       getComments2() : Observable<survey[]>{

      return this.http.get(this.commentsUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     } 

      /* getComments3() : Observable<resp[]>{

      return this.http.get(this.commentsUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     } */

}
