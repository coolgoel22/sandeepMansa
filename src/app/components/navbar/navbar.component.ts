import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.authService.getAuth().subscribe(auth => {
    //   if(auth) {
    //     this.isLoggedIn = true;
    //     this.loggedInUser = auth.email;
    //   } else {
    //     this.isLoggedIn = false;
    //   }
    // });

  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
