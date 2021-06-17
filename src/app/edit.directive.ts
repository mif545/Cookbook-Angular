import { Directive, ElementRef, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { RecipesService } from './recipes.service';

@Directive({
  selector: '[Edit]'
})
export class EditDirective implements OnChanges{

  constructor(private element:ElementRef,public ser:RecipesService) {
    // sessionStorage.setItem("UserCodeOfRecipe",JSON.stringify(this.RecipeToShow.UserCode))
    this.sesstionUserCode=JSON.parse(sessionStorage.getItem("myUserCode")); 
    
    this.recipe=this.ser.Recipe
    console.log("this.recipe");
     console.log(this.recipe);
     if(this.sesstionUserCode==this.recipe.UserCode){
         
      this.element.nativeElement.style.display="block";
             
       }
       else{
        this.element.nativeElement.style.display="none";
       }
   }
   ngOnChanges(changes:SimpleChanges):void{
   
    
   }
   sesstionUserCode;
   recipe:Recipe;
}
