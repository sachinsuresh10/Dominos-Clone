import { Component, OnInit } from '@angular/core';
 import { NgForm } from '@angular/forms';
 import { MatSnackBar } from '@angular/material/snack-bar';
 import { Router } from '@angular/router';
 import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor(public service:ReviewsService,public snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
   onSubmit(form:NgForm)
   {
     console.log(form.value);
     this.service.postreview(form.value).subscribe(res =>{
     console.log(form.value);
      this.snackbar.open("Thank you for your review", '', {
        duration: 7000,
        verticalPosition: 'top'
      });
       this.router.navigateByUrl("/reviews");
     });
   }

}
