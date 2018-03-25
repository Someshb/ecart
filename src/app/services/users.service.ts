import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList} from 'angularfire2/database';
import  {UserModel} from '../common/user.model';

@Injectable()
export class UsersService {
userList : AngularFireList<any>;

  constructor(private firebase : AngularFireDatabase) { }

  GetData()
  {
    this.userList = this.firebase.list('UserCollection');
    return this.userList;
  }

  SubmitUser(userModel : UserModel)
  {
    console.log('Submitted data'); 
    console.log(userModel); 
     this.userList.push({
       
      FirstName : userModel.FirstName,
      LastName : userModel.LastName,
      Password : userModel.Password,
      Email : userModel.Email,
      Address : userModel.Address,
      UserName : userModel.UserName,
      Phone : userModel.Phone

     });

  }

}
