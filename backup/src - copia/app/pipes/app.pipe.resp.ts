import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'unique2',
  pure: false
})

export class Unique2Pipe implements PipeTransform {
    transform(value: any): any{
        if(value!== undefined && value!== null){
            return _.uniqBy(value, 'cuestionario[idRespuesta]');
        }
        return value;
    }
}