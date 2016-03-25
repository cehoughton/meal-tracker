
import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodlistComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker App!</h1>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})
export class AppComponent {
  public food: Food;
  constructor(){
    this.food = [];
  }
foodWasSelected(clickedFood: Food): void {
  console.log("parent", clickedFood);
}
}
