import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userList;
  @Output() selectedUserInfoFromInnerComponemt: EventEmitter<any> = new EventEmitter<any>();
  constructor(httpClient : HttpClient) { 

  }

  ngOnInit() {
  }

  // This event will emmit data to outer 
  public PassRowEventToParent(event: any)
  {
    //console.log(eventID.target.innertext);
    //console.log(eventID.);
    
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    //console.log("Selected Row : "+ value);
    this.selectedUserInfoFromInnerComponemt.emit(value);
    //console.log(event.srcElement.attributes);
    
  }
}
