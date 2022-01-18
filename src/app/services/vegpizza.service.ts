import { Injectable } from '@angular/core';
import { vegpizza } from 'src/app/models/vegpizza-model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { cart } from 'src/app/models/cart-model'



@Injectable({
  providedIn: 'root'
})
export class VegpizzaService {
  formdata!:cart;

  constructor( private http:HttpClient) { }
 
  readonly url = "http://localhost:62651/api";

  getVegpizzalist():Observable<vegpizza[]>
  {
    return this.http.get<vegpizza[]>(this.url+"/vegpizzas");
  }

  postcart(cart:vegpizza)
  {
    return this.http.post(this.url+"/carts",cart);
  }
  getcart():Observable<cart[]>
  {
    return this.http.get<cart[]>(this.url+"/carts")
  }

  deleteItemCart(id:number)
  {
    return this.http.delete(this.url+"/carts/"+id);
  }

}
