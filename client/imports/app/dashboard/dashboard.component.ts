import { Component , OnInit} from "@angular/core";
import { Router } from '@angular/router';
import template from "./dashboard.component.html";
import style from "./dashboard.component.scss";

@Component({
  selector: "app",
  template,
  styles: [style]
})

export class DashboardComponent implements OnInit {
  constructor(private router:Router) {
  }
  ngOnInit() {
    if(localStorage.getItem('token')==null){
      this.router.navigate(['login']);
    }
  }
}