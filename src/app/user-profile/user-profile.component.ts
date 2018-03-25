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
  constructor(private httpClient : HttpClient,private db: AngularFireDatabase) { 
    this.GetAllUserList();

     
     

  }

  public myEvent(event: any)
  {
    
       this.userID =  event.target.value;
       
      
  }
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
      console.log(this.userList); 

     });


    
  }

  public getUseroutputInfo(passedObject : any)
  {
     console.log('Event emmited from userlist component');
     console.log(passedObject);
  }

  ngOnInit() {
  }

}
