import {Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs:Component['onSubmitNewFood'],
  template: `
    <div class="new-food-form">
      <h3>Log Food:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <hr>
      <button (click)="addFood(newName)" class="btn-success btn-lg add-button">Add Food</button>
    </div>

  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newFoodName: HTMLInputElement, details: HTMLSelectElement){
    var values = [newFoodName.value, details.value];
    this.onSubmitNewFood.emit(values);
    console.log(values);
    details.value = null;
    newFoodName.value = null;
  }
}
