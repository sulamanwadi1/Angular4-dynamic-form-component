import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-textarea',
  template: `<div class="{{myClass}}">
    <label>{{myObj.title}} : </label>
    <textarea [class]="myValidInput" [(ngModel)]="myObj.value"
    [name]="myName" (blur)="action(this, $event.target.value)" [required]="myObj.validation.required"></textarea>
    </div>`,
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent implements OnInit {
  @Input('class') myClass;
  @Input('obj') myObj;
  myValidInput = '';
  myName = '';

  constructor() { }

  ngOnInit() { }

  action(ths, val){
    var valid = ths.myObj.validation;
    var value = ths.myObj.value;
    this.myValidInput='';

    if(ths.myObj.value.length <= 0 && ths.myObj.validation.required == true){ 
      this.myValidInput='error';
      console.log('Enter your '+ ths.myObj.title);
    }
  }

}
