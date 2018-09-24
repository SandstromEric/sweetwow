import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WowService {
    apiKey: string = environment.bnet.Key;
    
    constructor(private http: HttpClient) { }

    getCharProfile(region: string, realm: string, charname: string): Observable<any> {
        return this.http.get(`https://${region}.api.battle.net/wow/character/${realm}/${charname}?fields=talents&locale=en_GB&apikey=${this.apiKey}`);
    }

    /* getCharTalents(region: string, realm: string, charname: string): Observable<any> {
        return this.http.get(`https://${region}.api.battle.net/wow/character/${realm}/${charname}??fields=talents&locale=en_GB&apikey=${this.apiKey}`);
    } */
}
