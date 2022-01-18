import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { nonvegpizza } from 'src/app/models/nonvegpizza-model'
import { cart } from 'src/app/models/cart-model'

@Injectable({
  providedIn: 'root'
})
export class NonvegpizzaService {
  formdata!:cart;

  constructor(private http:HttpClient) { }
  readonly url = "http://localhost:62651/api";

  getNonvegpizzalist():Observable<nonvegpizza[]>
  {
    return this.http.get<nonvegpizza[]>(this.url+"/nonvegpizzas");
  }

  postcart(cart:nonvegpizza)
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
