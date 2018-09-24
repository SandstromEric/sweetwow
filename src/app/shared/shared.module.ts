import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CharacterClassPipe } from './pipes/character-class.pipe';
import { CharacterRacePipe } from './pipes/character-race.pipe';
import { CharacterClassDirective } from './directives/character-class.directive';
import { CharacterRaceDirective } from './directives/character-race.directive';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        CharacterClassPipe,
        CharacterRacePipe,
        CharacterClassDirective,
        CharacterRaceDirective
    ],
    declarations: [CharacterClassPipe, CharacterRacePipe, CharacterClassDirective, CharacterRaceDirective],
})
export class SharedModule { }
