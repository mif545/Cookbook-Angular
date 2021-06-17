import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import { UserService } from './user.service';
import Swal from 'sweetalert2'
@Injectable()
export class canEdit implements CanActivate{
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        this.sesstionUser=JSON.parse(sessionStorage.getItem("myUser"));
       
        
      if( this.sesstionUser)
      {
          return true;
      }
      
     Swal.fire({
        title: "Problem",
        text: "לא בוצעה כניסה לאתר",
        icon: "error"
      })
          return false;
  }
  

    
    constructor(public ser:UserService){
      

    }

    sesstionUser;
    sesstionUserCodeOfRecipe:string;
    list:User[];
    flag:number=0;
}