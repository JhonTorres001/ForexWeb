import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogg: boolean;
  isLoggedIn$: Observable<boolean>;

  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
    console.log('init navbar');
    this.isLoggedIn$ = this.Auth.isLoggedIn;
    this.isLogg = false;
    console.log(this.isLoggedIn$);
  }

  onLogout() {
    this.Auth.logout();
  }

}
    