import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface LoginFormData  {
  email: string,
  password: string
}

@Component({
  selector: 'demo-projects-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formData!: LoginFormData

  constructor(private fb: FormBuilder) {
    this.loginForm.valueChanges.subscribe(fd =>{
      this.formData = fd;
    })
  }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    })
  }

}
