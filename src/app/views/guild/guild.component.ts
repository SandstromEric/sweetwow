import { Component, OnInit } from '@angular/core';
import { WowService } from '../../shared/services/wow.service';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../shared/services/firestore.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-guild',
    templateUrl: './guild.component.html',
    styleUrls: ['./guild.component.scss']
})
export class GuildComponent implements OnInit {
    params;
    guild$;

    constructor(private route: ActivatedRoute, private fs: FirestoreService, private wow: WowService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.params = params
            console.log(params);
            this.guild$ = this.fs.colWithIds$(`guilds-${params.region}`, ref => ref.where('realm', '==', params.realm).where('name', '==', params.guildName)).pipe(
                map(char => char[0])
            );
        })
    }

    addGuild() {
        this.wow.getGuildProfile(this.params.region, this.params.realm, this.params.guildName).subscribe(data => {

            let newData = {
                side: data.side,
                name: data.name.toLowerCase(),
                realm: data.realm.replace(/\s+/g, '-').toLowerCase(),
                lastModified: data.lastModified,
                level: data.level,
                battlegroup: data.battlegroup,
                achievementPoints: data.achievementPoints,
                emblem: data.emblem,
                members: data.members.length
            };

            if (newData) {
                this.fs.add(`guilds-${this.params.region}`, newData)
            }
        })
    }

}
