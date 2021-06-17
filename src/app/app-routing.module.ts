import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { canEdit } from './canEdit';
import { DeatailsRComponent } from './deatails-r/deatails-r.component';
import { DeatailsRecipesComponent } from './deatails-recipes/deatails-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent,children:[
    {path:'register/:Name' ,component:RegisterComponent}
  ]},
  { path: 'dRecipe', component:DeatailsRComponent,children:[
    {path:'edit/:Code' ,component:LoginComponent}
  ]},
  { path: 'edit', component:DeatailsRComponent,children:[
    {path:'dRecipe/:Code' ,component:LoginComponent,canActivate:[canEdit]}
  ]},
  { path: 'register', component:RegisterComponent},
  { path: 'logOut', component:LogOutComponent},
  
  
  { path: 'allRecipes', component:AllRecipesComponent,children:[
    {path:'edit/:Code' ,component:AllRecipesComponent},
    {path:'dRecipe/:Code' ,component:AllRecipesComponent,canActivate:[canEdit]}
  ]},
  { path: 'edit/:Code', component:EditRecipeComponent,},
  { path: 'dRecipe/:Code', component:DeatailsRComponent,canActivate:[canEdit]},
  { path: 'register/:Name', component:RegisterComponent},
  // { path: 'deatalsr', component:DeatailsRComponent},
  { path: '', redirectTo: "/login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
