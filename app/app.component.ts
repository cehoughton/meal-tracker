
import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker App!</h1>
      <h3>{{ food.details }}<h/3>
    </div>
  `
})
export class AppComponent {
  public food: Food;
  constructor(){
    this.food = new Food("Create Food List", 0);
  }

}
