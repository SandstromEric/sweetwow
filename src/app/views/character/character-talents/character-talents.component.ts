import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { WowService } from '../../../shared/services/wow.service';

@Component({
    selector: 'app-character-talents',
    templateUrl: './character-talents.component.html',
    styleUrls: ['./character-talents.component.scss']
})
export class CharacterTalentsComponent implements OnInit {
    @Input() charDocId: string;
    spec;
    constructor(private fs: FirestoreService, private wow: WowService) { }

    ngOnInit() {
        /* this.fs. */
    }

}
