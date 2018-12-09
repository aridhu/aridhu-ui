import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import * as $ from 'jquery';
import { NotificationServicesService } from '../notification-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  loggedIn = false;
  userObj: any;

  useremail: string;
  password: string;

  constructor(private authServ: AuthService, private router: Router, private noteSvc: NotificationServicesService) {
    //this.authServ.logout();
  }

  ngOnInit() {
     this.authChanged();
  }

  onGLogin() {

    this.authServ.loginWithGoogle();

  }

  authChanged() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.userObj = user;
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        this.router.navigate(['home/summary']);
      } else {
        this.userObj = null;
      }
    });
  }



}
