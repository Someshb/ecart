import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersService } from './services/users.service';



const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
 // { path: 'userProfile', component: UserProfileComponent },
  { path: 'registration',  component: SignUpComponent },
  { path: ' ',  redirectTo : '/home',  pathMatch : 'full' },
  { path: '**',  redirectTo : '/home',  pathMatch : 'full' }
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserListComponent,
    HomeComponent,
    NavBarComponent,
    SignUpComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
