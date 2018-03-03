import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() userList;
  @Output() getUseroutputInfo: EventEmitter<any> = new EventEmitter<any>();
  constructor(httpClient : HttpClient) { 

  }

  ngOnInit() {
  }

  public GetRowEvent(eventID: any)
  {
    console.log(eventID.target.innertext);
    this.getUseroutputInfo.emit('Hi'); 
  }
}
