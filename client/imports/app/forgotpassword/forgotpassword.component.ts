import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { RegisterService } from './service/register.service';
import template from './forgotpassword.component.html';
import style from './forgotpassword.component.scss';

@Component({
  selector: 'app',
  template,
  styles: [style],
  providers: [  ]
})
export class ForgotPasswordComponent implements OnInit{
  username:string;
  constructor(private router:Router){
    this.username = '';
  }
  ngOnInit() {
  }
  submit(){
      console.log(this);
  }
}