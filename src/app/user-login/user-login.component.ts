import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/firebase/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.loginWithGoogle().then((data) =>  {
      this.router.navigate(['']);

     })
 }
}
