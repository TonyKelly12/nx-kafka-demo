import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface SignUpFormData  {
  email: string,
  password: string
}
@Component({
  selector: 'demo-projects-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  formData!: SignUpFormData

  constructor(private fb: FormBuilder) {
   
  }
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: '',
      password: '',
      confirmPassword:''
    })

    this.signUpForm.valueChanges.subscribe(fd =>{
      this.formData = fd;
    })
  }
}
