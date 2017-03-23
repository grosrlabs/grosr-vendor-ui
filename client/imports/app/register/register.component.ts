import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { RegisterService } from './service/register.service';
import template from './register.component.html';
import style from './register.component.scss';

@Component({
  selector: 'app',
  template,
  styles: [style],
  providers: [  ]
})
export class RegisterComponent implements OnInit{
  username:string;
  password:string;
  confirmpassword:string;
  constructor(private router:Router){
    this.username = '';
    this.password = '';
    this.confirmpassword = '';
  }
  ngOnInit() {
  }
  submit(){
      console.log(this);
  }
}