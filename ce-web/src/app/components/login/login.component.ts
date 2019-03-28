import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from 'src/app/services/service-login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  formBuilder: FormBuilder;

  constructor(private _serviceLogin: ServiceLoginService) { }

  iniciarLogin = () => {
    this.formBuilder = new FormBuilder();
    this.formGroup = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    this._serviceLogin.loginUser(this.formGroup.value.user, this.formGroup.value.password);
  }

  loginFacebook() {
    this._serviceLogin.logout();
  }

  ngOnInit() {
    this.iniciarLogin();
  }

}
