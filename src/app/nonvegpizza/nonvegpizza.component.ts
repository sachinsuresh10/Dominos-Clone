import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NonvegpizzaService } from '../services/nonvegpizza.service';
import { nonvegpizza } from 'src/app/models/nonvegpizza-model'
import { MatSnackBar } from '@angular/material/snack-bar';
import { cart } from 'src/app/models/cart-model';


@Component({
  selector: 'app-nonvegpizza',
  templateUrl: './nonvegpizza.component.html',
  styleUrls: ['./nonvegpizza.component.css']
})
export class NonvegpizzaComponent implements OnInit {

  constructor(private service:NonvegpizzaService,public snackbar:MatSnackBar) { }
  listdata!:MatTableDataSource<any>;
  
  columns:string[]=["name","description","Add to Cart"];

  ngOnInit(): void {
    this.refreshlist();
  }
  refreshlist()
  {
    this.service.getNonvegpizzalist().subscribe(data => {
      this.listdata = new MatTableDataSource(data);
      
    });

  }
  addtocart(row:nonvegpizza)
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
