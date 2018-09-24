import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../shared/services/firestore.service';
import { WowService } from '../../shared/services/wow.service';
import { take, map } from 'rxjs/operators';

export interface Talent {
    selected: boolean
    spec: {
        name: string;
    }
}

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
    params;
    character$;
    spec: string;
    constructor(private route: ActivatedRoute, private fs: FirestoreService, private wow: WowService) { }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.params = params
            this.character$ = this.fs.colWithIds$(`characters-${params.region}`, ref => ref.where('realm', '==', params.realm).where('name', '==', params.name)).pipe(
                map(char => char[0])
            );

            /* this.wow.getCharTalents(params.region, params.realm, params.name).pipe(
                map((data) => data.talents),
                map((data: Talent[]) => data.filter(item => item.selected)),
                map(data => data[0])
            ).subscribe(data => {
                console.log
                this.spec = data.spec.name;
            }) */
        })


    }

    updateChar(id: string) {
        this.wow.getCharProfile(this.params.region, this.params.realm, this.params.name).subscribe(data => {
            this.spec = data.talents.filter(item => item.selected)[0];
            
            let newData = {
                spec: data.talents.filter(item => item.selected)[0].spec,
                class: data.class,
                faction: data.faction,
                name: data.name.toLowerCase(),
                race: data.race,
                realm: data.realm.replace(/\s+/g, '-').toLowerCase(),
                gender: data.gender,
                lastModified: data.lastModified,
                level: data.level,
                calcClass: data.calcClass,
                battlegroup: data.battlegroup,
                achievementPoints: data.achievementPoints,
                thumbnail: data.thumbnail,
                totalHonorableKills: data.totalHonorableKills
            };

            if(newData) {
                this.fs.upsert(`characters-${this.params.region}/${id}`, newData)
            }
        })
    }

    addChar() {
        this.wow.getCharProfile(this.params.region, this.params.realm, this.params.name).subscribe(data => {

            let newData = {
                spec: data.talents.filter(item => item.selected)[0].spec,
                class: data.class,
                faction: data.faction,
                name: data.name.toLowerCase(),
                race: data.race,
                realm: data.realm.replace(/\s+/g, '-').toLowerCase(),
                gender: data.gender,
                lastModified: data.lastModified,
                level: data.level,
                calcClass: data.calcClass,
                battlegroup: data.battlegroup,
                achievementPoints: data.achievementPoints,
                thumbnail: data.thumbnail,
                totalHonorableKills: data.totalHonorableKills
            };

            if(newData) {
                this.fs.add(`characters-${this.params.region}`, newData)
            }
        })
    }

}
