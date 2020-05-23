import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  todoArray=[];
  addTodo(value){    this.todoArray.push(value);    console.log(this.todoArray);   }
}
