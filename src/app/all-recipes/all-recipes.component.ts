import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/Category';

import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(public ser:RecipesService,public ser1:CategoryService,public rout:Router) { 
   
    
     
    this.ser.allRecipe().subscribe(succ=>{
      this.listRecipe=succ;
      this.filterlist=succ
      console.log(this.listRecipe)
      this.flag=1;
    }
    );
    this.ser1.allCategory().subscribe(succ=>{
      this.listCategory=succ;
      this.filterategory=this.listCategory;
    });
      
    
    
  }
 
  
  ngOnInit(): void {
   
   
  }
   listRecipe:Recipe[]; 
 listCategory:Category[];
  theRecipe:Recipe;
  RecipeEdit:Recipe;
 copyRecipe:Recipe;
  isVisible:boolean; 
  RecipeAdd:Recipe;
  addRecipeIfTrue:boolean=false;
  filterlist:Recipe[];
  filterategory;
  sesstionUser;
  flag=0;
  
  category:number;
  name:string;
  time:number;
  
 showRecipe(r:Recipe)
{
  this.ser.Recipe=r;
this.rout.navigate(['dRecipe',r.Code]);
}

savaEdit(){
  this.RecipeEdit=this.copyRecipe;
  this.isVisible=true;
}
cencelEdit(){
  this.RecipeEdit=undefined;
  console.log(this.listCategory);
}
addRecipe(add){
   this.RecipeAdd=new Recipe(add.Code,add.Name,add.CodeCategory,add.PreparationTime,add.LevelDifficulty,add.DateAddingRecipe
    ,add.Ingredients,add.Preparation,add.UserCode,add.Image,add.ViewImage);
  this.listRecipe.push(this.RecipeAdd);
 
  this.addRecipeIfTrue=false;

  
}
showAddRecipe(){
 this.addRecipeIfTrue=true;
}





f(){
  this.filterlist=this.listRecipe;

  if(this.name)
{
  this.filterlist=this.filterlist.filter(filt=>filt.Name.indexOf(this.name)>=0);

  console.log(this.filterlist)

}
if(this.time)
{
  this.filterlist=this.filterlist.filter(filt=>filt.PreparationTime<=this.time);
  console.log(this.filterlist)
}
if(this.category)
{
if(this.category!=0)
{
  console.log(this.category)
  this.filterlist=this.filterlist.filter(filt=>filt.CodeCategory==this.category);
  console.log(this.filterlist)
}
}
}
}