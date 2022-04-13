import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider,FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user!:SocialUser;

  constructor(private authService:SocialAuthService,private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user = user;
    })
  }

  signinwithGoogle():any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID) 
  }


  signinwithFacebook():any{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID) 
  }

logOut():any{
  this.authService.signOut();
}
}

