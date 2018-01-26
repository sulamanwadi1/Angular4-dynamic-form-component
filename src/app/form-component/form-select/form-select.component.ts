import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-select',
  template: `<div class="{{myClass}}">
  <label>{{myObj.title}} : </label>
  <select [class]="myValidSelect" [name]="myName" [(ngModel)]="myObj.value" [required]="myObj.validation.required" (change)="action(this, $event.target.value)">
    <option value="">Select</option>
    <option *ngFor="let opt of myObj.selectOptions" [value]="opt.value">{{opt.label}}</option> 
  </select>
  </div>`,
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  @Input('class') myClass;
  @Input('obj') myObj;
  myValidSelect = '';
  myName = '';

  constructor() { }

  ngOnInit() {
    this.myName = (this.myObj.title).replace(/ /g,'').toLowerCase()+'_'+(Math.random()*10).toFixed(0);
  }

  action(ths, val){
    console.log(this.myObj.value);
  }
}

