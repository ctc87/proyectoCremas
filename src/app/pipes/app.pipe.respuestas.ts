import {Pipe} from '@angular/core';

@Pipe({
  name: 'respPipe'
})
export class respPipe {

  transform(value) {
    return value.filter(s => {
      return s.id!=1;
    });
  }

}