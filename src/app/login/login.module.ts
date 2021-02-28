import {LoginComponent} from "./login.component";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

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
