import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login () {
    this.name = 'Vishnu';
    if (this.email === 'test@gmail.com' && this.password === 'test') {
      sessionStorage.setItem('token', 'fdgdg8776w76rw7r8w8r8wr');
      this.router.navigate(['profile']);
    }
  }
}
