import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReviewsService } from '../services/reviews.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit  {
  review:boolean=false;
  constructor(private service:ReviewsService) { }
  listdata!:MatTableDataSource<any>;
  
  columns:string[]=["username","pizzaname","review1","rateings"];

  ngOnInit(): void {
    this.refreshlist();
    
  }
  refreshlist()
  {
    this.service.getReviewlist().subscribe(data => {
      this.listdata = new MatTableDataSource(data);
      
    });
  }
  
}
