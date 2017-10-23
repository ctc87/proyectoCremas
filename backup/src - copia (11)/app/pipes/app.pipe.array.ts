import { Pipe, PipeTransform } from '@angular/core';
/*
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    if (!value) {
      return value;
    } 

    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    } 
    return keys;
  } 
} 
*/

@Pipe({ name: 'keys' })
/*export class KeysPipe implements PipeTransform {
  transform(value): any {
    if(!value) return null;
    return Object.keys(value);
  }
}*/
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}