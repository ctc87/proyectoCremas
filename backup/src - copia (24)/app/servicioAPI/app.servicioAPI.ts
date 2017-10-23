import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { survey } from '../constructor.survey'; 
import { Cuesto } from '../quest.interface';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIservice {

     constructor (private http: Http) {}
    /*private*/public SurveyUrl = "http://localhost/hydradermica/web/app_dev.php/conexion"; 
    public LogUrl = "http://localhost/hydradermica/web/app_dev.php/log"; 

    getComments2() : Observable<survey[]>{

      return this.http.get(this.SurveyUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    } 

   /* putQuest(cuesto:Cuesto){
        let json = JSON.stringify(cuesto);
        let params = "json="+json;
        let headers = new Headers({"Content-Type":"application/x-www-form-urlencoded"});
        //let headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.LogUrl,
            //json,{headers:headers})
            
            params,{headers:headers})
            .map(res=> {
            console.log(res.json());
               return res.json();
            })
                   
    }*/

}
