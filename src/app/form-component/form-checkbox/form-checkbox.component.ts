import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-checkbox',
  template: `<div class="{{myClass}}">
    <label>{{myObj.title}} : </label>
    <span *ngFor="let c of myObj.checkboxOptions">
      <input id="_{{c.value}}" type="checkbox" [class]="myValidInput" [name]="c.value" [value]="c.value" (change)="action(this, $event.target.value)" [required]="myObj.validation.required" />
      <label for="_{{c.value}}">{{c.label}} </label>
    </span>
  </div>`,
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {
  @Input('class') myClass;
  @Input('obj') myObj;
  myValidInput = '';
  myName = '';

  constructor() { }

  ngOnInit() { this.myObj.value = []}

  action(ths, val){
    let valArr = this.myObj.value;
    if( valArr.indexOf(val) == -1 ){ valArr.push(val); }
    else{ valArr.splice(valArr.indexOf(val), 1); }
    this.myObj.value = valArr;
    this.myValidInput='';
    
    if(valArr.length <= 0 && ths.myObj.validation.required == true){ 
      console.log('Enter your '+ ths.myObj.title);
      this.myValidInput='error';
    }
  }

}
