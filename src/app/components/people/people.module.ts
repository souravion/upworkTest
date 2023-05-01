import {NgModule} from '@angular/core';
import {PeopleComponent} from './people.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
],
  declarations: [PeopleComponent],
  exports: [PeopleComponent]
})
export class PeopleModule {}
