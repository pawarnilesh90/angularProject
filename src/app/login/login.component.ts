import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login () {
    sessionStorage.setItem('token', 'fdgdg8776w76rw7r8w8r8wr');
    this.router.navigate(['profile']);
  }
}
