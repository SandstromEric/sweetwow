import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAddComponent } from '../../shared/components/dialog-add/dialog-add.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    openAddDialog() {
        this.dialog.open(DialogAddComponent, {
            width: '400px'
        })
    }

}
