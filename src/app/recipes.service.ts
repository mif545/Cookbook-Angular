import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
Recipe:Recipe;
  constructor(private http:HttpClient) { }
  allRecipe():Observable <Recipe[]>{
   
    return this.http.get<Recipe[]>("https://localhost:44385/api/Recipe/GetAllRecipes");
  }


  addRecipe(r:Recipe):Observable <Recipe>{
   
    return this.http.post<Recipe>("https://localhost:44385/api/Recipe/AddRecipe",r);
    
  }

  EditRecipe(r:Recipe):Observable <Recipe>{
   
    return this.http.post<Recipe>("https://localhost:44385/api/Recipe/EditRecipe",r);
    
  }
}
