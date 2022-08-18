import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  passwordMatched : boolean =true;

  public signupForm !: FormGroup; 
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      fullname:['',Validators.required],
      mobile:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  };
  
  signup(){

    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value).subscribe(res=>{
      alert("sign up sucessfull" );
      this.signupForm.reset();
      this.router.navigate(['login']);

    },
    err=>{
      alert("SomeThing WEnt Wrong");
    })
  }
}
