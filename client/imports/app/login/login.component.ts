import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import template from './login.component.html';
import style from './login.component.scss';

@Component({
  selector: 'app',
  template,
  styles: [style],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit{
  username:string;
  password:string;
  constructor(private login:LoginService, private router:Router){
    this.username = '';
    this.password = '';
  }
  ngOnInit() {
  }
  submit(){
    this.login.validateLogin(this.username,this.password).subscribe(
      user => {
        if(user.token){
          localStorage.setItem('token',user.token);
          this.router.navigate(['']);
        }
      },
      error =>  {});
  }
}