import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ClientService } from '../../services/client.serive';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  public client: any = {
    name: "",
    fatherName: "",
    mobileNo: "",
    dob: "",
    email: "",
    password:"",
    state: "0",
    city: "0",
    locality: "",
    pincode: ""
  };

  // ViewChild(registerForm) form;

  constructor(
    private authService: AuthService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({valid, value}) {
    if(valid && (value.state === 0 || value.city === 0)){

      return false;
    }else{
      this.authService.createUser(this.email, this.password)
      .then(res => {
        // this.router.navigate(['/']);
        this.saveUserProfile(value);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  saveUserProfile(value: any){
    let client = {
      name: value.name,
      fatherName: value.fatherName,
      age: value.dob,
      state: value.state,
      city: value.city,
      locality: value.locality,
      pincode: value.pincode,
      mobileNo: value.mobileNo
    }

    this.clientService.saveNewClient(client);
  }

  getClients(){
    this.clientService.getClients();
  }
}
