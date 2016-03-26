import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-select',
  inputs: ['food'],
  outputs: ['onClick'],
  template: `
    <div class="food-select">
      <h3>Details: {{food.details}}</h3>
      <h3>Calories: {{food.calories}}</h3>
      <button class="btn btn-success" type="submit" (click)="foodClicked()">Edit Details</button>
    </div>
  `
})

export class FoodSelectComponent {
  public food: Food;
  public onClick: EventEmitter<Food>
  constructor() {
    this.onClick = new EventEmitter();
  }
  foodClicked(){
    this.onClick.emit(this.food);
  }
}
