import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Races{
    races: Array<any>
}

@Pipe({
    name: 'characterRace'
})
export class CharacterRacePipe implements PipeTransform {
    constructor(private http: HttpClient) {

    }
    transform(value: any, args?: any): any {
        return this.http.get('https://eu.api.battle.net/wow/data/character/races?locale=en_GB&apikey=77wrhq6fsqfynmbwgptpczdk6742djgy').pipe(
            map((data: Races) => data.races),
            map(data => data.filter(data => data.id === value)),
            map(data => data[0].name)
        )
    }

}
