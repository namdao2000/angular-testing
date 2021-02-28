import {LoginComponent} from "./login.component";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: []
})

export class LoginModule { }
