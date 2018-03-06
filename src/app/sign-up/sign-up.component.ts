import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../common/user.model";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   
  userModel : User = new User();
  @ViewChild('userformValidate')
  checkForm : any;
constructor(private httpClient: HttpClient) { 
     
  }

  ngOnInit() {
  }
  userFormSubmit()
  {
      if(this.checkForm.valid)
      {
        console.log(this.userModel);   
        // https://github.com/techsithgit/json-faker-directory.git
        //this.httpClient.post("")
        this.checkForm.reset();
      }
     
  }
}
