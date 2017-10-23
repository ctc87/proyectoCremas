/*import { Component } from '@angular/core';
import { ConfigurationService } from './ConfigurationService';

export class AppComponent {
  title = 'Test';
  configs;
 
   constructor(private _ConfigurationService: ConfigurationService)
    {
        console.log("Reading _ConfigurationService ");
    
         this._ConfigurationService.getConfiguration()
            .subscribe(
            (res) => {
                this.configs = res;
                console.log("after reading");
                console.log(this.configs);
                console.log(this.configs.SecurityService);
                console.log(this.configs.CacheService);
            },
            (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );
    
    }
 
}
*/
//-----------       NUEVO    ------------------
import { Component } from '@angular/core';
//import { appComponentRadio } from './respuestas_radio/app.component.radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 
})
export class AppComponent {
 
}