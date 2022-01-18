import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { VegpizzaComponent } from './vegpizza/vegpizza.component';
import { NonvegpizzaComponent } from './nonvegpizza/nonvegpizza.component';
import { CartComponent } from './cart/cart.component';
// import { AuthGuard } from './guards/auth.guard';
import { OrderdComponent } from './orderd/orderd.component';



const routes: Routes = [
  {path:"OurMenu",component:CategoryComponent},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Review",component:ReviewsComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Login",component:LoginComponent},
  {path:"addreview",component:AddreviewComponent},
  {path:"vegpizza",component:VegpizzaComponent},
  {path:"nonvegpizza",component:NonvegpizzaComponent},
  {path:"cart",component:CartComponent},
  {path:"order",component:OrderdComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
