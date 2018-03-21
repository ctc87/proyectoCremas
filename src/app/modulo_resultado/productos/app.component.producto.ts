import { Component, Input  } from '@angular/core';
import { HttpConbinaciones } from '../../servicioAPI/app.servicioHttpConbinaciones';
import { MyPost } from '../../interfaces/mypost';

// https://www.concretepage.com/angular-2/angular-2-4-dynamic-component-loader-example#dynamic-components
@Component({
  selector: 'app-producto',
  templateUrl: './app.component.producto.html',
  host: {'class': 'col-12 col-lg-3 col-xl-2'}
})  

export class Producto implements MyPost {
	
	@Input() post: any;
	public onUrl(url) {
// 	 window.location.href = url; 
	 window.open(
          url,
          '_blank'
        );
	}

}