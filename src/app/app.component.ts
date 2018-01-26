import { Component } from '@angular/core';
import { addPageFormObject, listPageArray } from './objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Form Components App';

  form = addPageFormObject;
  list = listPageArray;
  
  
  getFormValue(){
    var test = Object.keys(this.form).map(prop => {
      return Object.assign({}, {[prop]:this.form[prop].value } );
    });

    console.log( test );
  }

}
