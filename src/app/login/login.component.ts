import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

login(userid: string,password: string) {
  if(userid=='admin' && password=='123'){
    localStorage.setItem('isLoggedin','true');
    alert('Login Success !');
  }else{
    localStorage.setItem('isLoggedin','false');
  }
}

}
