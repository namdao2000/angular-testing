import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoverLetterComponent} from './cover-letter.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CoverLetterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoverLetterModule { }
