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
    numResp : number;
    public backgrounds = [
        'assets/pregunta1.png',
        'assets/pregunta2.png',
        'assets/pregunta3.png',
        'assets/pregunta4.png',
        'assets/solucion.png'
        ]
    public bck = 'assets/pregunta1.png'
    options: RequestOptions;   
    respuestas: Cuesto2[]=[];
    btnSlected = [];
    public mostrarBottonEnviar = false;
    public mail;
    public preguntas =[];

   public static readonly IP = "http://169.154.11.26";
   public static readonly SERVER_PATH = "hydradermica/web/app_dev.php";
    constructor (private http: Http) {
        console.log("creado servicio api")
        
        }
    // public SurveyUrl  = "http://192.168.10.106/hydradermica/web/app_dev.php/conexion"; 
    // public ProductospUrl = "http://192.168.10.106/hydradermica/web/app_dev.php/productos"; 
    // public LogUrl     = "http://192.168.10.106/hydradermica/web/app_dev.php/Log"; 
    // public Handleerror;           
    // /*private*/
    
    // public SurveyUrl  = IP + SERVER_PATH + "conexion"; 
    // public ProductospUrl = IP + SERVER_PATH + "/productos"; 
    // public LogUrl     = "http://169.154.11.26/hydradermica/web/app_dev.php/Log"; 
    // public SurveyUrl  = "http://192.168.10.106/hydradermica/web/app_dev.php/conexion"; 
    // public ProductospUrl = "http://192.168.10.106/hydradermica/web/app_dev.php/productos"; 
    // public LogUrl     = "http://192.168.10.106/hydradermica/web/app_dev.php/Log"; 
    
     public SurveyUrl  = "assets/json/conexion.json"; 
    public ProductospUrl = "assets/json/productos.json"; 
    // public LogUrl     = "assets/json/Log.json"; 
    public mailUrl     = "http://192.168.10.106/hydradermica/web/app_dev.php/Mail";
    public Handleerror;

    public initRespuestas() {
        for (var index = 0; index < this.numResp; index++) {
            this.respuestas[index] = new Cuesto2(0,[]);
            
        }
    }
  
    public change(i) {
        this.bck =  this.backgrounds[i];
    }
    
    getComments2() {

        return this.http.get(this.SurveyUrl)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };

    getComments3() : Observable<Productos[]>{
        
        return this.http.get(this.ProductospUrl)
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };

    putQuest(obj): Observable<any>{
        let json = JSON.stringify(obj);
        let headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.mailUrl, json,this.options)
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
    
    public showButton() {
        let mostrar = true;
        this.respuestas.forEach(function(element, index) {
          mostrar = (element.resp != 0) && mostrar;
          
        });  
        this.mostrarBottonEnviar = mostrar;
    }
    
    
    
    public createJsonMailObject() {
        let obj =  {
        "email":this.mail,
    	"quest1":this.preguntas[0],
    	"resp1":this.respuestas[0].resp,
    	"quest2":this.preguntas[1],
    	"resp2":this.respuestas[1].resp,
    	"quest3":this.preguntas[2],
    	"resp3":this.respuestas[2].resp,
    	"quest4":this.preguntas[3],
    	"resp4":this.respuestas[3].resp,
    	"subresp1":this.respuestas[3].subresp[0] ? this.respuestas[3].subresp[0] : "",
    	"subresp2":this.respuestas[3].subresp[1] ? this.respuestas[3].subresp[1] : "",
    	"subresp3":this.respuestas[3].subresp[2] ? this.respuestas[3].subresp[2] : ""
        }
        console.log(obj)
        this.putQuest(obj);
    }
    
    
    
	
}
