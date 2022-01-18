import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VegpizzaService } from 'src/app/services/vegpizza.service';
import { vegpizza } from 'src/app/models/vegpizza-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cart } from 'src/app/models/cart-model';



@Component({
  selector: 'app-vegpizza',
  templateUrl: './vegpizza.component.html',
  styleUrls: ['./vegpizza.component.css']
})
export class VegpizzaComponent implements OnInit {

  constructor( private service:VegpizzaService,public snackbar:MatSnackBar) { }

  listdata!:MatTableDataSource<any>;
  
  columns:string[]=["name","description","Add to Cart"];

  ngOnInit(): void {
    this.refreshlist();
  }
  refreshlist()
  {
    this.service.getVegpizzalist().subscribe(data => {
      this.listdata = new MatTableDataSource(data);
      
    });
  }

    addtocart(row:vegpizza)
  {
    
    console.log(row);
    this.service.postcart(row).subscribe(res=>
      {
          this.snackbar.open("Added to Cart",'',{
            duration : 7000,
            verticalPosition:'top'
          });
      });
      

  }
}
