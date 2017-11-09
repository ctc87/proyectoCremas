import { Component, HostBinding } from '@angular/core';
import { HttpConbinaciones } from './servicioAPI/app.servicioHttpConbinaciones';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { APIservice } from './servicioAPI/app.servicioAPI';
import { enableProdMode } from '@angular/core'

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  providers : [HttpConbinaciones],
  // styles: ['host {background-image: url("assets/solucion.png");}']
})
export class AppComponent { 
  // @HostBinding('style.background-image') backgroundIMG:string = 'url("assets/solucion.png")';
  
  // public backgrounds = ['assets/solucion.png','https://rotaractkc.files.wordpress.com/2013/04/custom-blue-wallpaper.jpg']
  // public bck = 'assets/solucion.png'

  constructor(
    public http: HttpConbinaciones, 
    private _sanitizer: DomSanitizer,
    private apiservice : APIservice
    ){
      }
  
  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${image})`);
  }
}