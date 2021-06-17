import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import Swal from 'sweetalert2'
import { CategoryService } from '../category.service';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  newRecipe:Recipe=new Recipe(null,null,null,null,null,null,null,null,null,null,null);
  input:boolean=false;
  arr:number[]=[1];
  rechivim1:string[]=[""];
  rechivim2:string[]=[];
  brr:number[]=[1];
  p1:string[]=[""];
  p2:string[]=[];
  sesstionUserCode;
  categoryList:Category[];
  myForm:FormGroup;
  @Output()
  onAdd:EventEmitter<Recipe>=new EventEmitter <Recipe>();
  constructor(public rout:Router,public ser:RecipesService,public serc:CategoryService) { }

  ngOnInit(): void {
   
    this.serc.allCategory().subscribe(succ=>this.categoryList=succ)
  }

  


  saveAdd()
  {
    for (let index = 1; index < this.rechivim1.length; index++) {
      this.rechivim2[index-1]=this.rechivim1[index];
     }
    this.newRecipe.Ingredients=this.rechivim2;
    for (let index = 1; index < this.p1.length; index++) {
      this.p2[index-1]=this.p1[index];
     }
    this.newRecipe.Preparation=this.p2;
    this.newRecipe.Image="./assets/"+this.newRecipe.Name+".jpg";
    this.sesstionUserCode=JSON.parse(sessionStorage.getItem("myUserCode"));
     this.newRecipe.UserCode= this.sesstionUserCode;
     console.log(this.newRecipe.UserCode);
     this.newRecipe.DateAddingRecipe=new Date();
    console.log(this.newRecipe);
     
    this.ser.addRecipe(this.newRecipe).subscribe(succ=>{
      console.log("aaaaaaaaaa");
    }
      
    );



// Swal.fire(
//   '!המתכון נוסף בהצלחה',
//   '!תודה',
//   'success'
  
// )
Swal.fire({
  title: this.newRecipe.Name,
  text: 'המתכון נוסף בהצלחה',
  imageUrl: "./assets/"+this.newRecipe.Name+".jpg",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
     this.onAdd.emit(this.newRecipe);
  }
  addInput1(r:string){
 this.input=true;
//  console.log(r);
//  this.arr.push(1);
// console.log(this.arr);

this.rechivim1.push(r);
console.log(this.rechivim1);

  


  }
  addInput2(r:string){
    this.input=true;
  //   console.log(r);
  //   this.brr.push(1);
  //  console.log(this.brr);
   
   this.p1.push(r);
   console.log(this.p1);
   
     
   
   
     }
addImage(src){
console.log(src);

}
back(){
  
}
}
