import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-radiobutton',
  template: `<div class="{{myClass}}">
    <label>{{myObj.title}} : </label>
    <span *ngFor="let r of myObj.radioOptions">
      <input id="_{{r.value}}" type="radio" [class]="myValidInput" [name]="myName" [value]="r.value" (change)="action(this, $event.target.value)" [required]="myObj.validation.required" />
      <label for="_{{r.value}}">{{r.label}} </label>
    </span>
  </div>`,
  styleUrls: ['./form-radiobutton.component.css']
})
export class FormRadiobuttonComponent implements OnInit {
  @Input('class') myClass;
  @Input('obj') myObj;
  myValidInput = '';
  myName = '';

  constructor() { }

  ngOnInit() {
    this.myName = (this.myObj.title).replace(/ /g,'').toLowerCase()+'_'+(Math.random()*10).toFixed(0);
  }

  action(ths, val){
    console.log(val, ths);
    this.myObj.value = val;
    this.myValidInput='';
    
    if(ths.myObj.value.length <= 0 && ths.myObj.validation.required == true){ 
      console.log('Enter your '+ ths.myObj.title);
      this.myValidInput='error';
    }
  }

}
