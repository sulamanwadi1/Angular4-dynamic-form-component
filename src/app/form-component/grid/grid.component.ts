import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid',
  template: `<div [class]="myClass">
    <table border="1" cellPadding="5" cellSpacing="0">
    <tr>
      <th *ngFor="let h of heading1"> {{h}}</th>
    </tr>
    <tr *ngFor="let trList of listing1">
      <td *ngFor="let tdList of heading2">{{trList[tdList]}}</td>
    </tr>
    </table>
  </div>`,
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input('class') myClass;
  @Input('obj') myObj;

  heading1=[];
  heading2=[];
  listing1=[]

  constructor() { }

  ngOnInit() {
    this.heading1 = Object.values(this.myObj.heading);
    this.heading2 = Object.keys(this.myObj.heading);
    this.listing1 = this.myObj.list;
  }

}

