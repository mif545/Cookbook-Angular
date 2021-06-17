import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  list;
  errorLogIn; log:boolean=false;
  checkUser:User=new User(null,null,null,null,null);
  sesstionUser;
  sesstionUserCode
  constructor(public ser:UserService,public rout:Router,public active:ActivatedRoute) { 
    
   
  }
  
  ngOnInit(): void {
    this.myForm=new FormGroup({
     "Name" :new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[\u0590-\u05FF]+$") ])),
     "Password" :new FormControl("",Validators.required),

    //  "Password" :new FormControl("",Validators.compose([Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]))
    })
    this.ser.allUser().subscribe(succ=>{
      this.list=succ;
      console.log(this.list);
    });
  }

conection(){
   console.log(this.list);
    this.ser.userLogIn(this.myForm.value.Name,this.myForm.value.Password).subscribe(succ=>{
    this.errorLogIn =succ ;
    let theName=this.myForm.value.Name;
    if(this.errorLogIn==0){ 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'הסיסמא שהקשת שגויה!',
        footer: '<a href>נסה שנית</a>'
      })
      this.log=true;
         
    }
  
    if(this.errorLogIn==1){
      Swal.fire({
        title: 'המשתמש אינו קיים במערכת',
        text: "האם ברצונך להרשם לאתר?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'להרשמה'
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.rout.navigate(['register',this.myForm.value.Name]);
        }
      })
    }
  
    if(this.errorLogIn==2){
      sessionStorage.setItem("myUser",JSON.stringify({name:this.myForm.value.Name,password:this.myForm.value.Password}))
      this.sesstionUser=JSON.parse(sessionStorage.getItem("myUser"));
      this.list.forEach(element => {
        console.log(element.Password);
        console.log(this.sesstionUser.password);
        if(element.Password==this.sesstionUser.password){
          sessionStorage.setItem("myUserCode",JSON.stringify(element.Code));
          this.sesstionUserCode=JSON.parse(sessionStorage.getItem("myUserCode"));
        }
      });
       Swal.fire(
            'שלום'+" "+this.myForm.value.Name,
            'כאן תוכלי למצוא מגוון מתכונים לכל ארוחה ',
            'success'
            
          )
      this.rout.navigateByUrl('allRecipes');
     
    }
  }
    
 

    );

   
   
}

// ForgetPwd(){
//   this.rout.navigateByUrl('register');
// }

}
