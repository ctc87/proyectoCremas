import { Component, Input  } from '@angular/core';
import { HttpConbinaciones } from '../../servicioAPI/app.servicioHttpConbinaciones';
import { MyPost } from '../../interfaces/mypost';

// https://www.concretepage.com/angular-2/angular-2-4-dynamic-component-loader-example#dynamic-components
@Component({
  selector: 'app-producto',
  templateUrl: './app.component.producto.html',
  host: {'class': 'col-xs-5th-5 col-md-5th-1'}
})  

export class Producto implements MyPost {
	
	@Input() post: any;
	public onUrl(url) {
	  console.log()
	 window.location.href = url; 
	}

}