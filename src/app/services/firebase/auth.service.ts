import { Injectable } from '@angular/core';
import { AngularFireAuth }  from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//  AuthProviders, AuthMethods
//import { AuthProviders }  from 'angularfire2/auth';
//import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth) { }

  loginWithGoogle() : any {
  
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.af.auth.signOut();
  }

}
