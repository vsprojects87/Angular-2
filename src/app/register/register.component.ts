import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  form :any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullname :['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      email : ['',[Validators.required]],
      address : ['',[Validators.required]],
    });
  }


  fname : string = '';
  email : string ='';
  address : string = '';
  postdata(){
    this.fname = this.form.get('fullname').value;
    this.email = this.form.get('email').value;
    this.address = this.form.get('address').value;
    console.log(this.fname + " " + this.email + " " + this.address);
  }


  resetform() {
    this.form.reset();
    }

    fillform() {
      this.form.setValue({
        'fullname' : 'sahil ahire',
        'email' : 'sahil@gmail.com',
        'address' : 'navi mumbai'
      })
      }

  ngOnInit(): void {
    // this.form.get('fullname').valueChanges.subscribe(
    //   (fname: string) => {
    //     console.log('Name change :'+ fname);
    //   }
    // )

    // above is the example of value change we are printing the changing value so we are getting change value so we are declaring it inside ngOnInit so we will get data on page data change 


    //  this.form.get('fullname').statusChanges.subscribe(
    //   (status: string) => {
    //     console.log('Name status :'+ status);
    //   }
    // )
    // checks if valid or invalid according to validators

    // this.form.statusChanges.subscribe(
    //   (status: string) => {
    //     console.log('form status :'+ status);
    //   }
    // )
    // checks forms status

  }      

  }
