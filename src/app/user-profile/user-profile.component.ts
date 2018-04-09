import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  userID : any ;
  userList : any[];
  userCollection : any[];
  userDetailsInfo : any[];
  userName : string;
  email: string;
  address: string;
  name : string;
  contact : string;


  constructor(private httpClient : HttpClient,private db: AngularFireDatabase) { 
    this.GetAllUserList();
  }

 
  // This is added for search user -------
  public GetUserListByName()
  {
     //console.log('in userlist');
    //this.httpClient.get("https://jsonplaceholder.typicode.com/users")
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users?username=${this.userID}`)
    .subscribe(
       (data: any[]) =>
       {
         //console.log(data);
         this.userList =  data;
         //console.log(this.userList);
       }
    )
    
  }

  
  public GetAllUserList()
  {
     console.log('in userlist');
    /*this.httpClient.get("https://jsonplaceholder.typicode.com/users")
    .subscribe(
       (data: any[]) =>
       {
         //console.log(data);
         this.userList =  data;
         console.log(this.userList);
       }
    )*/

    this.db.list('UserCollection').valueChanges().subscribe(collection=>{

      this.userList = collection;
      //console.log(this.userList); 

     });
  }

  public myEvent(event : any)
  {

  }
  public selectedUserInfoFromInnerComponemt(passedObject : any)
  {
     console.log('Event emmited from userlist [inner component]  --------------');
     console.log(passedObject);
     var list = passedObject as string;
     var userDetailsInfo = list.split('|');
     console.log(userDetailsInfo[1]);
     this.userName = userDetailsInfo[0];
     this.email = userDetailsInfo[4];
     this.address = userDetailsInfo[3];
     this.name = userDetailsInfo[1] + userDetailsInfo[2];
     this.contact = userDetailsInfo[5];
  }

  ngOnInit() {
  }

}
