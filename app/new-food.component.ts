import {Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs:['onSubmitNewFood'],
  template: `
    <div class="new-food-form">
      <h3>Log Food:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <hr>
      <p>Details</p>
      <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
      <hr>
      <input type="number" placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <button (click)="addFood(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add Food</button>
    </div>

  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newFoodName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var values = [newFoodName.value, newDetails.value, newCalories.value];
    this.onSubmitNewFood.emit(values);
    console.log(values);
    newFoodName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
