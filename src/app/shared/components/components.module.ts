import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { MaterialModule } from '../material/material.module';
import { CharacterClassComponent } from './character-class/character-class.component';
import { CharacterRaceComponent } from './character-race/character-race.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [DialogAddComponent, CharacterClassComponent, CharacterRaceComponent],
  exports: [DialogAddComponent, CharacterClassComponent, CharacterRaceComponent],
  entryComponents: [DialogAddComponent]
})
export class ComponentsModule { }
