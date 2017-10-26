import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conbinaciones } from '../modulo_resultado/conbinaciones/conbinaciones';

@Injectable()
export class HttpConbinaciones {
    
    public static readonly SREVER_PATH = "assets/json";
    public static readonly EXT = ".json";
    
    public static readonly PATH = '/conbinaciones';
    
    public productosConbinaciones: Object
    
    constructor(public http : HttpClient) { 
        console.log("creado el servicio http resultado");
        this.http.get(HttpConbinaciones.SREVER_PATH + HttpConbinaciones.PATH + HttpConbinaciones.EXT).subscribe(data => {
        this.productosConbinaciones = data;
        });
    }
}