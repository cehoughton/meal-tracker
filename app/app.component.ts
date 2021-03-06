

import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <div class="app-blue">
        <h1>Meal Tracker App!</h1>
        <food-list
          [foodList]="foods"
          (onFoodSelect)="foodWasSelected($event)">
        </food-list>
      </div>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [new Food("Pizza", "Two slices of pizza, one Hawaiian and the other plain cheese", 400, 0),];
  }
foodWasSelected(clickedFood: Food): void {
  console.log("parent", clickedFood);
 }
}
