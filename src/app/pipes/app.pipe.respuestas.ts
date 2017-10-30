import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'respPipe'
})
export class respPipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value) {
    // ES6 array destructuring
   // let [id] = args;
    return value.filter(s => {
      return s.id!=1;
    });
  }

}