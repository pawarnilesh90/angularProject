import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    // sessionStorage.setItem('user', JSON.stringify({userName: 'Vishnu', token: 'dadsd'}));
    localStorage.setItem('user', JSON.stringify({userName: 'Vishnu', token: 'dadsd'}));
   }

  ngOnInit(): void {
    if(!sessionStorage.getItem('user')) {
      // this.router.navigate(['login']);
      // this.router.navigateByUrl('home/image-gallery');
    }
  }

}
