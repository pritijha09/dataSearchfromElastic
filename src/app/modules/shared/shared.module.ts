/**********Angular Imports *********/
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  entryComponents : [],
  exports : [
    MaterialModule,
    FormsModule,
  ],
})
export class SharedModule { }
