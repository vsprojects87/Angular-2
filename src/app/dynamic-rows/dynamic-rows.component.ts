import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-rows',
  templateUrl: './dynamic-rows.component.html',
  styleUrl: './dynamic-rows.component.css'
})
export class DynamicRowsComponent implements OnInit {

  FG: any;

  totalRow : any;

  constructor(private _fb:FormBuilder) {}

  ngOnInit(): void {
    this.FG = this._fb.group({
      itemRows : this._fb.array([this.initItemRow()])
    })
  }

  initItemRow(){
    return this._fb.group({
      name :[''],
      roll:[''],
      class :[''],
      mob :['']
    })
  }

deleteRow(index: number) {
  const control = <FormArray>this.FG.controls['itemRows'];
  if(control!=null){
    this.totalRow = control.value.length
  }
  if(this.totalRow>1){
    control.removeAt(index);
  }else{
    alert('one record is mandatory !');
  }
}


addNewRow() {

  const control = <FormArray>this.FG.controls['itemRows'];
  control.push(this.initItemRow());
  }

}
