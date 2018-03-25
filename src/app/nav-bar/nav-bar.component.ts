import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import { Observable } from '@firebase/util';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   user : Observable<firebase.User>;
   authenticated : boolean = false;
  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe((auth)=> {
       if(auth != null)
       {
            this.user = af.authState;
            this.authenticated = true;
       }

    })


   }

   login()
   {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }
   logout()
   {
    this.af.auth.signOut();
    this.authenticated = false;
   }
  ngOnInit() {
  }

}
