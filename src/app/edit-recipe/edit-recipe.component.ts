import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from 'src/models/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'edit',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
 
  arr:string[]=[];
  brr:string[]=[];
  codeRecipe:number;
  RecipeToEdit:Recipe;
  list;
  newRecipe:Recipe;

  constructor(public active:ActivatedRoute,public ser:RecipesService,public rout:Router){}
  
    ngOnInit(){
     this.active.params.subscribe(param=>
      {this.codeRecipe=param.Code;
        console.log(this.codeRecipe); } );
   

    this.ser.allRecipe().subscribe(succ=>{
      this.list=succ;
      console.log(this.list);
      this.list.forEach(element => {
        if(element.Code==this.codeRecipe)
        {
          this.newRecipe=element;
        }
        this.RecipeToEdit=this.newRecipe;
      });});
   

  }
 
  
  
  thearr(){
  this.arr=this.RecipeToEdit.Ingredients;
  this.brr=this.RecipeToEdit.Preparation;
  }
  save(){
    this.RecipeToEdit.Ingredients= this.RecipeToEdit.Ingredients.filter(item=>item!="");
    this.RecipeToEdit.Preparation= this.RecipeToEdit.Preparation.filter(item=>item!="");
    console.log(this.RecipeToEdit);
    this.ser.EditRecipe(this.RecipeToEdit).subscribe(succ=>this.RecipeToEdit=succ);
    this.rout.navigate(['dRecipe',this.RecipeToEdit.Code]);
  }
  cencel(){
    this.rout.navigate(['dRecipe',this.RecipeToEdit.Code]);
  }
  check(){
    this.arr=this.arr.filter(item=>item!="");
    console.log(this.arr)
    this.arr.push("");
  }

  check1(){
    this.brr=this.brr.filter(item=>item!="");
    console.log(this.brr)
    this.brr.push("");
  }

  funcindex(index,item)
  {
    return index;
  }
  
}
