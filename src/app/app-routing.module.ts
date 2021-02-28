import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SshComponent} from './ssh/ssh.component';
import {AuthenticatedGuard} from './guards/authenticated.guard';
import {CoverLetterComponent} from './cover-letter/cover-letter.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'ssh',
    component: SshComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'cover-letter',
    component: CoverLetterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
