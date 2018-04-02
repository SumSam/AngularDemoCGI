import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ad-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';
  constructor(private authService: AuthService,
    private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      this.authService.login('test', 'test');

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }

}
