import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoverLetterComponent} from './cover-letter.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaveService} from '../services/save.service';



@NgModule({
  declarations: [
    CoverLetterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    SaveService
  ]
})
export class CoverLetterModule { }
