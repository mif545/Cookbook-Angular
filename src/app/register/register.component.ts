import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'
import { RangeValidation } from '../RangeValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm1:FormGroup;
  newUser:User;
  exist;
  theName:string="";
  messeg:string;

  constructor(public ser:UserService ,public rout:Router,public active:ActivatedRoute) {


   }

  ngOnInit(): void {
    this.myForm1=new FormGroup({
      "Code" :new FormControl("",Validators.compose([Validators.required,RangeValidation.Range(111111111, 999999999)])),
      // "Code" :new FormControl("",Validators.compose([Validators.required])),
      "Name" :new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[\u0590-\u05FF]+$") ])),
   
      "Mail" :new FormControl("",Validators.compose([Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
      "Address" :new FormControl("",Validators.compose([Validators.required])),
      "Password" :new FormControl("",Validators.compose([Validators.required]))
      // "Password" :new FormControl("",Validators.compose([Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]))
     });
    this.active.params.subscribe(param=>{
      this.theName = param.Name;
      
    });
   
  }
 
  addTheUser(){
     this.ser.chekIfUserExist(this.myForm1.value.Code).subscribe(succ=>{
     this.exist=succ;
    this.newUser=new User(this.myForm1.value.Code,this.myForm1.value.Name,this.myForm1.value.Mail
    ,this.myForm1.value.Address,this.myForm1.value.Password);
     console.log(this.exist)
    if(this.exist==1)
    {  
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
       })
      
      swalWithBootstrapButtons.fire({
        title: 'האם אתה בטוח שברצונך להרשם',
        text: "לא תוכל לבטל זאת!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
         
          this.ser.addUser(this.newUser).subscribe(succ=>this.messeg);
          this.rout.navigateByUrl('login');
        } else if (
         
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            
            'לא תוכל לצפות במגוון המתכונים שבאתר',
            
          )
        }
      })

     
  }
  if(this.exist==0){
   
    Swal.fire({
      title: 'המשתמש כבר קיים במערכת',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: ' LOG IN'
    })
    .then((result) => {
      if (result.isConfirmed) {
        
        this.rout.navigateByUrl('login');
      }
      
    })
   
   
   
  }
      });
   


}
}