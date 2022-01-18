import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from 'src/app/services/category.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { VegpizzaComponent } from './vegpizza/vegpizza.component';
import { NonvegpizzaComponent } from './nonvegpizza/nonvegpizza.component';
import { NonvegpizzaService } from './services/nonvegpizza.service';
import { VegpizzaService } from './services/vegpizza.service';
import { CartComponent } from './cart/cart.component';

import { ReviewsService } from './services/reviews.service';
import { CartService } from './services/cart.service';
import { OurmenuService } from './services/ourmenu.service';
import { AuthService } from './services/auth.service';
import { OrderdComponent } from './orderd/orderd.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ReviewsComponent,
    RegisterComponent,
    LoginComponent,
    AddreviewComponent,
    VegpizzaComponent,
    NonvegpizzaComponent,
    CartComponent,
    OrderdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,MatTableModule,MatButtonModule,MatPaginatorModule,
    MatGridListModule,
    MatSnackBarModule,FormsModule,
    HttpClientModule
  ],
  providers: [CategoryService,NonvegpizzaService,VegpizzaService,ReviewsService,CartService,OurmenuService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
