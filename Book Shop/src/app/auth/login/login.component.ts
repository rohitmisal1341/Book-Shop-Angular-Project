import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm! :FormGroup;

  
  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  @Input()
  isloggedIn:boolean=false;
  login(){

    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("login Success");
        this.isloggedIn= true;
        this.loginForm.reset;
        this.router.navigate([''])
      }else{
        alert("user not forunt")
      }
    },err=>{
      alert("something went wrong");
    })
  }

}
