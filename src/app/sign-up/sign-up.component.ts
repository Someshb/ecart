import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from "../common/user.model";
import { HttpClient } from '@angular/common/http';
import  {UsersService} from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   
  userModel : UserModel = new UserModel();
  //public userServices : UsersService = new UsersService();
  @ViewChild('userformValidate')
  checkForm : any;
constructor(private httpClient: HttpClient,private userServices : UsersService) { 
     
  }

  ngOnInit() {
    this.userServices.GetData();
  }
  userFormSubmit()
  {
      if(this.checkForm.valid)
      {
          console.log("After submit");
        // https://github.com/techsithgit/json-faker-directory.git
        //this.httpClient.post("")
        // Submit registration form object  through userService
        this.userServices.SubmitUser(this.userModel);
        //this.checkForm.reset();
      }
     
  }
}
