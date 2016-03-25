import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { LowPipe } from './low.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [LowPipe],
  directives: [FoodComponent, NewFoodComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show all food</option>
    <option value="notLow">Show food over 300 calories</option>
    <option value="low">Show food under 300 calories</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | low:filterLow"
    (click)="foodclicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `

})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterLow: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log("child", clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFoodInfo): void {
    this.foodList.push(
      new Food(newFoodInfo[0], newFoodInfo[1], this.foodList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
    console.log(this.filterLow);
  }

}
