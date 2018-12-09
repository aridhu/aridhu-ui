import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kaasuuser: firebase.User;

  constructor(private authServ: AuthService) { }

  ngOnInit() {
    this.authChanged();
  }

  async authChanged() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.kaasuuser = user;        
      } else {
        this.kaasuuser = null;
      }
    });
  }


  onGLogout() {
    this.authServ.logout();
  }

}
