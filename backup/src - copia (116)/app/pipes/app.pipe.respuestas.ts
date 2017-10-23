import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'res'
})
export class ResPipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    // ES6 array destructuring
    let [id] = args;
    return value.filter(respuesta => {
      return respuesta.id = /*+*/id;
    });
  }

}