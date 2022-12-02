import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  addedUsername = '';
  usernameStatus = 'No username added';


  constructor() {
   }

  ngOnInit(): void {
  }

  onAddUsername() {
    this.usernameStatus = this.addedUsername + " is your new username";
  }

}
