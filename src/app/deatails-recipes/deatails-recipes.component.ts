import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Component({
  selector: 'deatails-recipes',
  templateUrl: './deatails-recipes.component.html',
  styleUrls: ['./deatails-recipes.component.css']
})
export class DeatailsRecipesComponent  {
  public iconName:  string;


 
  @Input()
  myRecipe:Recipe;

  @Output()
  onShow:EventEmitter<Recipe>=new EventEmitter <Recipe>();
   show(r){
     console.log(r);
     this.onShow.emit(r);

   }




}
