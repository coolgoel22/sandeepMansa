import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user=>{
      debugger;
    });
    // this.authService.getAuth();.subscribe(auth => {
    //   if(auth) {
    //     this.router.navigate(['/']);
    //   }
    // });
  }

  onSubmit() {
    if(this.email && this.password){
      this.authService.login(this.email, this.password)
      .then(res=>{
        this.router.navigate(["/"]);
      
        debugger;
      })
      .catch(err=>{
        console.log(err);
      });
    }
  }

}
