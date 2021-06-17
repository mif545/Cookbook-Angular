import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DeatailsRecipesComponent } from './deatails-recipes/deatails-recipes.component';
import { DeatailsRComponent } from './deatails-r/deatails-r.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import {MatIconModule} from '@angular/material/icon';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { TimePipe } from './time.pipe';
import { LogOutComponent } from './log-out/log-out.component'
import { canEdit } from './canEdit';
import { EditDirective } from './edit.directive';
// import Swal from 'sweetalert2/dist/sweetalert2.js'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    DeatailsRecipesComponent,
    DeatailsRComponent,
    EditRecipeComponent,
    AddRecipeComponent,
    TimePipe,
    LogOutComponent,
    EditDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,
   FormsModule,
   MatIconModule,
   
    
  ],
  providers: [canEdit],
  bootstrap: [AppComponent]
})
export class AppModule { }
