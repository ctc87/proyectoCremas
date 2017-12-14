import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { survey } from '../constructor.survey'; 
import { Mail } from '../mail.interface';
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
    public resultadosMostrar = false;
    public mostrarBottonEnviar = false;
    public mail;
    public preguntas =[];
    public DescripcionesConsejos = [];
    public descripcion: String;
    public consejos: String;
    public ip: String;


    public static readonly IP = "http://encuesta.binhex.es";
    public static readonly SERVER_PATH = "hydradermica/web/app_dev.php";
    constructor (private http: Http) {
        this.http.get("https://jsonip.com").subscribe(data => {
            this.ip = data["ip"];
        })    
    }
    // public SurveyUrl  = "http://192.168.10.106/hydradermica/web/app_dev.php/conexion"; 
    // public ProductospUrl = "http://192.168.10.106/hydradermica/web/app_dev.php/productos"; 
    
    public SurveyUrl  = "assets/json/conexion.json"; 
    public ProductospUrl = "assets/json/productos.json"; 
    public LogUrl     = APIservice.IP + "/web/app_dev.php/Log"; 
    public mailUrl     = APIservice.IP + "/web/app_dev.php/Mail";
    public Handleerror;

    public initRespuestas() {
        for (var index = 0; index < this.numResp; index++) {
            this.respuestas[index] = new Cuesto2(1,"",[]);
            
        }
    }
  
    public change(i) {
        this.bck =  this.backgrounds[i];
    }
    
    getComments2() {
        return this.http.get(this.SurveyUrl)
                        .map((res:Response) => res.json())
                        .catch(this.handleError);
    };

    getComments3() : Observable<Productos[]>{
        
        return this.http.get(this.ProductospUrl)
                        .map((res:Response) => res.json())
                        .catch(this.handleError);
    };

    putQuest(obj:Mail){
        let json = JSON.stringify(obj);
        let headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.mailUrl, json, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }
    
    putLog(obj:Object){
        let json = JSON.stringify(obj);
        let headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.LogUrl, json, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }
    
    
    
    onLoginSuccess(res: Response) {
     return res.json();
    }
    
    private onError(error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }
    

    private extractData(res: Response) {
        console.log(res)
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
          mostrar = (element.resp != 0 && element.resp != 1) && mostrar;
          
        });
        
        this.mostrarBottonEnviar = mostrar;
    }
    

    public resultados() {
        let that = this;
        this.resultadosMostrar = true;
        this.DescripcionesConsejos.forEach(function(element, index){
            if(that.respuestas[2].resp == element.id) {
                that.descripcion = element.descripcion;
                that.consejos = element.consejo;
            }
        });
    }
    
    
    public createJsonMailObject(aceptadosTerminos) {
            
        if(aceptadosTerminos) {
            let obj: Mail
            obj =  {
                "email":this.mail,
            	"quest1":this.preguntas[0].pregunta || "SEXO?",
            	"resp1":this.respuestas[0].tituloResp,
            	"quest2":this.preguntas[1].pregunta,
            	"resp2":this.respuestas[1].tituloResp,
            	"quest3":this.preguntas[2].pregunta,
            	"resp3":this.respuestas[2].tituloResp,
            	"quest4":this.preguntas[3].pregunta,
            	"resp4":this.respuestas[3].tituloResp,
            	"subresp1":this.respuestas[3].subresp[0].texto ? this.respuestas[3].subresp[0].texto : "",
            	"subresp2":this.respuestas[3].subresp[1].texto ? this.respuestas[3].subresp[1].texto : "",
            	"subresp3":this.respuestas[3].subresp[2].texto ? this.respuestas[3].subresp[2].texto : "",
            	"descripcion":this.descripcion,
                "consejos":this.consejos
            };
            this.putQuest(obj).subscribe(
              (data) => console.log(data)
            );
        } else {
            console.error("acepta los terminos")
        }
    }

      
    createObjLog() {
      return  {
          'idCuestionario':0, 
          'quest1':this.preguntas[0].id,
          'resp1':this.respuestas[0].resp,
          'quest2':this.preguntas[1].id,
          'resp2':this.respuestas[1].resp,
          'quest3':this.preguntas[2].id,
          'resp3':this.respuestas[2].resp,
          'quest4':this.preguntas[3].id,
          'resp4':Number(this.respuestas[3].resp),
          'subresp1':Number(this.respuestas[3].subresp[0].id) || 1,
          'subresp2':Number(this.respuestas[3].subresp[1].id) || 1,
          'subresp3':Number(this.respuestas[3].subresp[2].id) || 1,
          'ip':this.ip, 
          fecha:"01/01/2017"
      }
    }
    
    enviarLog() {
        let log = this.createObjLog();
        this.putLog(log).subscribe(
          (data) => console.log(data)
        );   
    }

    
    
    // createObjLog() {
    //   return  {
    //       'idCuestionario':0, 
    //       'preguntas':[
    //             {
    //                 idPregunta:this.preguntas[0].id,
    //                 idRespuesta:this.respuestas[0].resp,
    //                 idSubrespuesta:[1,1,1]
    //             },
    //             {
    //                 idPregunta:this.preguntas[1].id,
    //                 idRespuesta:this.respuestas[1].resp,
    //                 idSubrespuesta:[1,1,1]
    //             },
    //             {
    //                 idPregunta:this.preguntas[2].id,
    //                 idRespuesta:this.respuestas[2].resp,
    //                 idSubrespuesta:[1,1,1]
    //             },
    //             {
    //                 idPregunta:this.preguntas[3].id,
    //                 idRespuesta:Number(this.respuestas[3].resp),
    //                 idSubrespuesta:[
    //                                  Number(this.respuestas[3].subresp[0]) || 1,
    //                                  Number(this.respuestas[3].subresp[1]) || 1,
    //                                  Number(this.respuestas[3].subresp[2]) || 1
    //                                 ]
    //             }
    //         ], 
    //       email:this.mail, 
    //       fecha:Date.now()
    //       };
       
       
    // }
    
    
	
}
