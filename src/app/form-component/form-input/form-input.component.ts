import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-input',
  template: `<div class="{{myClass}}">
    <label>{{myObj.title}} : </label>
    <input type="text" [class]="myValidInput" [(ngModel)]="myObj.value"
    [name]="myName" (blur)="action(this, $event.target.value)" [required]="myObj.validation.required" />
    </div>`,
  styleUrls: ['./form-input.component.css']
})

export class FormInputComponent implements OnInit {
  @Input('class') myClass;
  @Input('obj') myObj;
  myValidInput = '';
  myName = '';

  constructor() { }

  ngOnInit() {
    this.myName = (this.myObj.title).replace(/ /g,'').toLowerCase()+'_'+(Math.random()*10).toFixed(0);
  }

  action(ths, val){
    var value = ths.myObj.value;
    this.myValidInput='';
    
    if( ths.myObj.validation.type == 'email' ){
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(value) || value==''){
          this.myValidInput='';
        }
        else{
          this.myValidInput='error';
        }
    }

    if(ths.myObj.value.length <= 0 && ths.myObj.validation.required == true){ 
      console.log('Enter your '+ ths.myObj.title);
      this.myValidInput='error';
    }
  }

}
