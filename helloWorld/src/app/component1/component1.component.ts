import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  name:String = "Chuck";

  // Code for One Way Binding
  oneWayBinding="Chucks One Way Binding";

  // Code for one way Property Binding
  oneWayProperty:string ="Data in class";
  alertUser() {
    alert("The value  is " + this.oneWayProperty);
  }

  // Event Binding
  message = "No Customers Added";
  modifyMessage() {
    this.message = "A customer has been added ";
  }

  // Two Way Binding
  twoWayBinding: String = "default value";

}
