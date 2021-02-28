import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {SshModule} from './ssh/ssh.module';
import {CoverLetterModule} from './cover-letter/cover-letter.module';
import { HomeComponent } from './home/home.component';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  // You need to import the modules that are used in the smaller pages.
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SshModule,
    CoverLetterModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
