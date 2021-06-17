import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userArr:User[]=
  [new User("1","מרים" ,"מנחם בגין 88 פתח תקוה","mf8568734@gmail.com", "mF85923" ),
  new User("2","הרצל 30 תל אביב","רבקה","rivka534@gmail.com","gm76580" )
];

  constructor(private http:HttpClient) { }

  // allUser(){
   
  //   return this.userArr;
  // }

  // theUserExist(myForm:FormGroup){

  //  return this.userArr.find(u=>u.Name==myForm.value.Name&&u.Password!=myForm.value.Password);
  
  // }

  
  allUser():Observable <User[]>{
   
    return this.http.get<User[]>("https://localhost:44385/api/User/getAllUser");
  }

  userLogIn(n:string,p:string):Observable <User>{
    return this.http.get<User>("https://localhost:44385/api/User/UserLogIn?name="+n+"&password="+p);
  }

  addUser(u:User):Observable <User>{
   
    return this.http.post<User>("https://localhost:44385/api/User/addUser",u);
  }

  chekIfUserExist(c :string):Observable <User>{
    return this.http.get<User>("https://localhost:44385/api/User/chekIfUserExist?code="+c);
  }

}