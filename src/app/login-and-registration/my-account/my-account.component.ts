import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
    });

    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
      Address: ['', Validators.required],
      Gender: ['', Validators.required],
      Mobile: ['', [Validators.required, Validators.maxLength(10)]],
      CollegeName: ['', Validators.required],
      BatchName: ['', Validators.required],
      isTCAccepted: ['', Validators.requiredTrue]
    });
  }

  onSubmitLoginForm(loginForm) {
  }

  onSubmitRegisterForm() {
  }

}
