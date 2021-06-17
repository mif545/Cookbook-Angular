import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { User } from 'src/models/User';
import { canEdit } from '../canEdit';
import { CategoryService } from '../category.service';
import { RecipesService } from '../recipes.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-deatails-r',
  templateUrl: './deatails-r.component.html',
  styleUrls: ['./deatails-r.component.css']
})
export class DeatailsRComponent  implements OnInit   {
 CategoryArr;  
 arr:number[]=[];
 num:number;
 codeRecipe:number;
 RecipeToShow:Recipe;
 list;
 sesstionUserCode;
//  showEdit:string;
 listUser:User[];
 user:User;
 UserFilter;
  constructor(public serC:CategoryService,public rout:Router,public active:ActivatedRoute,public serR:RecipesService,public serU:UserService){
   
  }
  ngOnInit():void{
 
      this.serC.allCategory().subscribe(succ=>this.CategoryArr=succ);
      this.active.params.subscribe(param=>
      {this.codeRecipe=param.Code;  } );
      
       this.serR.allRecipe().subscribe(succ=>{
       this.list=succ;
       this.list.forEach(element => {
       if(element.Code==this.codeRecipe)
       {
          this.RecipeToShow=element;
       } });  });
     
       this.serU.allUser().subscribe(succ=>this.listUser=succ);
 
  }
   
   


 
    @Output()
     onEdit:EventEmitter<Recipe>=new EventEmitter <Recipe>();


 check(){
  //   sessionStorage.setItem("UserCodeOfRecipe",JSON.stringify(this.RecipeToShow.UserCode))
  //   this.sesstionUserCode=JSON.parse(sessionStorage.getItem("myUserCode")); 
  //   console.log(this.sesstionUserCode);
  //  if(this.sesstionUserCode==this.RecipeToShow.UserCode){
  //        console.log()
  //       this.showEdit="true";
           
    //  }
   }
  


 backallrecipe(sr){
//  
  this.rout.navigateByUrl('allRecipes');
 }
 editTheRecipe(editR){
  //  this.sesstionUser
  
  console.log("edit");
    this.rout.navigate(['edit',editR.Code]);
   this.onEdit.emit(editR);

  }
f(){

for(this.num=0;this.num<this.RecipeToShow.LevelDifficulty;this.num++)
{
 this.arr[this.num]=9;
 
{
  this.arr.length;


}
  
}
}

}
