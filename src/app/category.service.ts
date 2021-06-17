import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  allCategory():Observable <Category[]>{
    return this.http.get<Category[]>("https://localhost:44385/api/Category/getAllCategory");
  }
}
