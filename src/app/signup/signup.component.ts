import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(private formBuilder : FormBuilder , private http:HttpClient){}

  ngOnInit(): void {
   this.signupForm = this.formBuilder.group({
    fullName:[''],
    mobile:[''],
    email:[''],
    password:['']
   })
  }
  signUp(){
    
  }


}
