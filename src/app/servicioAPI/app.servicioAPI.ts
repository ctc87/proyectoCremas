import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { survey } from '../constructor.survey'; 
import { Cuesto } from '../quest.interface';
import { Productos } from '../constructor.productos'; 
import { Observable } from 'rxjs/Rx';
import { Cuesto2 } from '../quest2.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class APIservice {
    headers: Headers;
    options: RequestOptions;   
    respuestas: Cuesto2[]=[];
        //respuestas: Array<Cuesto2> =  
        /*, 
        subresp1:11,
        subresp2:12,
    subresp3:13 */


    constructor (private http: Http) {}
    public SurveyUrl  = "http://192.168.10.106/hydradermica/web/app_dev.php/conexion"; 
    public ProductospUrl = "http://192.168.10.106/hydradermica/web/app_dev.php/productos"; 
    public LogUrl     = "http://192.168.10.106/hydradermica/web/app_dev.php/Log"; 
    public Handleerror;           

    getComments2() {

        return this.http.get(this.SurveyUrl)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 

    getComments3() : Observable<Productos[]>{
        
        return this.http.get(this.ProductospUrl)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    putQuest(cuesto:Cuesto): Observable<any>{
        console.log(cuesto);
        let json = JSON.stringify(cuesto);
        let headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.LogUrl, json,this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let json2 = res.json();
        return json2 || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server handle error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}