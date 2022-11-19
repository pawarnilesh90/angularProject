import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users: any = [];
  constructor() {

  }
  ngOnInit(): void {
    this.users = [
      {firstName: 'Vishnu', lastName: 'Shegokar', address: 'Pune'},
      {firstName: 'Nilesh', lastName: 'Pawar', address: 'Pune'},
      {firstName: 'Rahul', lastName: 'Tendulkar', address: 'Mumbai'},
      {firstName: 'Sachin', lastName: 'Dravid', address: 'Karnataka'},
    ];
    console.log(this.users.length);
  }

}
