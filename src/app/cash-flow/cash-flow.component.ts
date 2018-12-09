import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.css']
})
export class CashFlowComponent implements OnInit {

  kaasuuser: firebase.User;
  
  constructor(private authServ: AuthService) { 
    
  }

  ngOnInit() {
    this.kaasuuser = firebase.auth().currentUser;
  }

  onGLogout() {
    this.authServ.logout();
  }
}
