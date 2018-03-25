export class UserModel {

    public $key : string;
    public UserName : string;
    public Password : string ;
    public FirstName : string;
    public LastName : string;
    public Email : string;
    public Address : string;
    public Phone : string;
     constructor(){

        this.FirstName = "";
        this.UserName = "";
        this.LastName = "";
        this.Email = "";
        this.Address = "";
     }
}
