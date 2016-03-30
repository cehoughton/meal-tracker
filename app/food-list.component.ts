import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import { LowPipe } from './low.pipe';
import { FoodSelectComponent } from './food-select.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [LowPipe],
  directives: [FoodComponent, FoodSelectComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show all food</option>
    <option value="notLow">Show food over 300 calories</option>
    <option value="low">Show food under 300 calories</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | low:filterLow"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  <food-select *ngIf="selectedFood" [food]="selectedFood" (onClick)="foodToEdit = selectedFood">
  </food-select>
  <edit-food-details *ngIf="foodToEdit" [food]="foodToEdit">
  </edit-food-details>
  <div class="OK">
  <button class="btn btn-success" *ngIf="foodToEdit" (click)="editToggle()">OK</button>
  </div>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `

})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public foodToEdit: Food;
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
      new Food(newFoodInfo[0], newFoodInfo[1], newFoodInfo[2], this.foodList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
    console.log(this.filterLow);
  }
  editToggle() {
    this.foodToEdit = null;
  }
}
