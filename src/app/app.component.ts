import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'domino';
  login:boolean=true;
  logout:boolean=false;
  constructor(private router:Router)
  {}
  ngOnInit(): void {
    
  }
  logoutS()
  {
    sessionStorage.removeItem('log');
    this.router.navigateByUrl("/home");
    this.login = true;
    this.logout = false;
  }
}
