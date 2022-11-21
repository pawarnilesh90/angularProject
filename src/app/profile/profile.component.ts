import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users: any = [];
  name = 'Vishnu';
  selectedUser = '';
  constructor() {

  }
  ngOnInit(): void {
    this.users = [
      {firstName: 'Vishnu', lastName: 'Shegokar', address: 'Pune', status: 'Active'},
      {firstName: 'Nilesh', lastName: 'Pawar', address: 'Pune', status: 'Inactive'},
      {firstName: 'Rahul', lastName: 'Tendulkar', address: 'Mumbai', status: 'Deleted'},
      {firstName: 'Sachin', lastName: 'Dravid', address: 'Karnataka', status: 'Active'},
    ];
    console.log(this.users.length);
  }
  selectUser(user: any) {
    this.selectedUser = user.firstName;
  }
}
