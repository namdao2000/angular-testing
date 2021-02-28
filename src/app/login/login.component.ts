import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  loading = false;
  private nextPage = '/home';
  private returnRoute: string | undefined = undefined;

  constructor(private builder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
       username: ['', Validators.required],
       password: ['', Validators.required],
       rememberMe: [false]
      });
  }

  login(): void {
    if (this.loginForm.invalid){
      return;
    }

    this.router.navigate([this.returnRoute ? this.returnRoute : this.nextPage]).then(() => {
      console.log('Navigated away from the login page');
    });
  }
}


