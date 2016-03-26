import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
      <div class="food-display">
      <label>Food name: {{ food.name }}</label>
      </div>
  `
})
export class FoodComponent {
  public food: Food;

countCalories() {
  if(this.food.calories < 300) {
    this.food.low = true;
    console.log("low")
  } else {
    this.food.low = false;
  }
 }
}
