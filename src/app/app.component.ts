import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngularApp';
  showLoginBtn = false;
  constructor(private router: Router) {
    if(sessionStorage.getItem('token')) {
      this.showLoginBtn = true;
    } else {
      this.showLoginBtn = false;
    }
  }
  ngDoCheck() {
    if(sessionStorage.getItem('token')) {
      this.showLoginBtn = true;
    } else {
      this.showLoginBtn = false;
    }
  }
  logOutUser() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
