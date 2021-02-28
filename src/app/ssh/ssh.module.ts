import {NgModule} from '@angular/core';
import {SshComponent} from './ssh.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SshComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class SshModule { }
