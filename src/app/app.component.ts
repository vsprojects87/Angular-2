import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngIntro2';

  user = new User();

  constructor() { 
    localStorage.setItem('isLoggedin','false')  
  }

  // 1]...
  // onFormSubmit(form:NgForm){
  //   if(form.invalid){
  //     return;
  //   }

  //   console.log('User Name :' + form.controls['uname'].value);
  //   console.log('Gender :' + form.controls['gender'].value);
  //   console.log('Married :' + form.controls['married'].value);
  //   console.log('T&C :' + form.controls['tc'].value);

  // }
  // reset(form: NgForm){
  //   this.user = new User();
  //   form.resetForm({
  //     married:false
  //   });
  // }

}



/* types of guards :

canActivate
canActivateChild
canDeactivate
Resolve
canload
*/