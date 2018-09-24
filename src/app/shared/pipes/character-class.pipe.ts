import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Class{
    id: number
}

export interface Classes{
    classes: Array<any>
}

@Pipe({
    name: 'characterClass'
})
export class CharacterClassPipe implements PipeTransform {
    className;
    constructor(private http: HttpClient) {

    }


    transform(value: any, args?: any): any {
        return this.http.get('https://eu.api.battle.net/wow/data/character/classes?locale=en_GB&apikey=77wrhq6fsqfynmbwgptpczdk6742djgy').pipe(
            map((data: Classes) => data.classes),
            map(data => data.filter(data => data.id === value)),
            map(data => data[0].name)
        )

        
    }

}
