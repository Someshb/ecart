import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {environment} from './../environments/environment';

// Firebase  module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyLoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersService } from './services/users.service';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/firebase/auth.service';
import { UserLoginComponent } from './user-login/user-login.component';



const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'home', redirectTo : '/home',  pathMatch : 'full'  },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'userProfile', redirectTo : '/userProfile',  pathMatch : 'full' },
  { path: 'registration',  component: SignUpComponent },
  { path: 'registration', redirectTo : '/registration',  pathMatch : 'full' },
  { path: 'userLogin',  component:  UserLoginComponent },
  { path: ' ',  redirectTo : '/home',  pathMatch : 'full' },
  { path: '**',  redirectTo : '/home',  pathMatch : 'full' },
  
  
]

const firebaseConfig = {

  apiKey: "AIzaSyB7E_mSMfDZOIHHTGs6CuBzRkyt0DHOqWc",
  authDomain: "ecartdb.firebaseapp.com",
  databaseURL: "https://ecartdb.firebaseio.com",
  projectId: "ecartdb",
  storageBucket: "ecartdb.appspot.com",
  messagingSenderId: "1058933115298"
}

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserListComponent,
    HomeComponent,
    NavBarComponent,
    SignUpComponent,
    FooterComponent,
    MyLoginComponent,
    UserLoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireModule.initializeApp(environment.firebaseDatabaseConfig),
    
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  providers: [UsersService,AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
