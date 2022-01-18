import { Component, OnInit } from '@angular/core';
 import { MatSnackBar } from '@angular/material/snack-bar';
 import { Router } from '@angular/router';
 import { AppComponent } from 'src/app/app.component';
 import { AuthService } from 'src/app/services/auth.service';
 import { ILogin } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(public service:AuthService,
     private router:Router,
     private snackbar:MatSnackBar,
    private app:AppComponent) { }
    logindata:ILogin = new ILogin();

  ngOnInit(): void {
  }
  review:boolean=false;
   onSubmit()
 {
   var email = (( < HTMLInputElement > document.getElementById("email")).value);
   var password = (( < HTMLInputElement > document.getElementById("password")).value);

   this.service.getbyemail(email).subscribe(data => {  

     if(data!=null)
     {
      this.logindata = data;
       console.log(this.logindata);

      if(this.logindata.email == email && this.logindata.password == password)
      {
        this.snackbar.open("Successfully Loggedin", '', {
           duration: 7000,
          verticalPosition: 'top'
         });
         sessionStorage.setItem('log','true');
         this.router.navigateByUrl("/cart");
         this.app.login = false;
         this.app.logout = true;
         this.review = true;
       }
       else{
         this.snackbar.open("Please Enter Valid Email and Password", '', {
           duration: 7000,
           verticalPosition: 'top'
         });
       }

     }
     else
     {
       this.snackbar.open("Please Enter Valid Email and Password", '', {
         duration: 7000,
         verticalPosition: 'top'
       }); 
     }
  });

  
 
}
}




