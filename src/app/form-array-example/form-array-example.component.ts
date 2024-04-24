import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrl: './form-array-example.component.css'
})
export class FormArrayExampleComponent implements OnInit{

  form :any;
  
  constructor() {   
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      contacts : new FormArray([
        new FormControl('1234567890'),
        new FormControl('1234567891'),
      ]),
     });
  }

  addContact() {
    this.form.get('contacts').push(new FormControl());
  }
  
  onSubmit(){
    console.log(this.form.get('contacts').value);
    console.log(this.form.value)
  }

  setPreset() { this.form.get('contacts').patchValue(['1234567890','2345678901']);  }

}
