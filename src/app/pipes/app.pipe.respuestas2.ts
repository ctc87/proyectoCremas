import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'respPipe2'
})
export class respPipe2 {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value,arg) {
    // ES6 array destructuring
    let id = arg;
    return value.filter(d => {
      return d.subrespOrigen.id==id;
    });
  }

}