import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Classwork- 25.01.2019';
  // sendForm(form) {
  //   console.log(form);
  // }

  formLoginObj = {
    name: '',
    password: ''
  };
  formRegistrObj = {
    name: '',
    password: '',
    email: ''
  };
  showLog = false;
  showRegistration = false;
  showResultLog = false;
  showResultRegistration = false;
  showEmptyName = false;
  showEmptyPass = false;

  printLogination(formLogin) {
    console.log(this.formLoginObj);
    this.showLog = false;
    this.showResultLog = true;
    this.showRegistration = false;
    if (this.formLoginObj.name === '') {
      this.showEmptyName = true;
      this.showResultLog = false;
    }
    if (this.formLoginObj.password === '') {
      this.showEmptyPass = true;
      this.showResultLog = false;
    }
  }


  showTheFormLogin() {
    setTimeout(() => {
      this.showLog = true;
    }, 700);
    this.showRegistration = false;
    this.showEmptyName = false;
    this.showEmptyPass = false;
    this.showResultLog = false;
    this.showResultRegistration = false;
  }

  printRegistration(formRegistration) {
    console.log(this.formRegistrObj);
    this.showRegistration = false;
    this.showResultRegistration = true;
    this.showResultLog = false;
  }

  showTheFormRegistration() {
    setTimeout(() => {
      this.showRegistration = true;
    }, 700);
    this.showLog = false;
    this.showResultLog = false;
    this.showEmptyName = false;
    this.showEmptyPass = false;
    this.showResultLog = false;
    this.showResultRegistration = false;
  }
}
