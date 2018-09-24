import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { CharacterComponent } from './views/character/character.component';
import { CharacterTalentsComponent } from './views/character/character-talents/character-talents.component';

const routes: Routes = [
    { path: ':region/:realm/:name', component: CharacterComponent },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        SharedModule
    ],
    exports: [RouterModule, CharacterTalentsComponent],
    declarations: [
        CharacterComponent,
        CharacterTalentsComponent
    ],
    entryComponents: [],
    providers: [
        /* { provide: RouteReuseStrategy, useClass: CustomReuseStrategy } */
    ]
})
export class AppRoutingModule { }