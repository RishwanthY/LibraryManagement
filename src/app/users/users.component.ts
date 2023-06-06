import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  WelcomeMessage = "Welcome to User details directory";
  public user :User = new User("Rishi", "rishi@gmail.com", "Rishi@123", "12/07/1997");
  constructor() { }

  ngOnInit(): void {
  }

}
