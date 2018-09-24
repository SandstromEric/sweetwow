import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './shared/services/firestore.service';
import { WowService } from './shared/services/wow.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private fs: FirestoreService, private wow: WowService) {

    }
    title = 'sweetwsdsdw';

    ngOnInit() {
        
    }
}
