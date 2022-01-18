import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { review } from 'src/app/models/review-model'

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  formdata:review = new review();
  constructor( private http:HttpClient) { }
  readonly url = "http://localhost:62651/api";

  getReviewlist():Observable<review[]>
  {
    return this.http.get<review[]>(this.url+"/reviews");
  }

  postreview(rev:review)
  {
    return this.http.post(this.url+"/reviews",rev);
  }

}
