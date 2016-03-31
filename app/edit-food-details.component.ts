import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
   <div class="edit-food-form">
    <h3>Edit food name:</h3>
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
    <br><br><br>
    <p>Details:</p>
      <input [(ngModel)]="food.details" class="col-sm-8 input-lg food-form"/>
      <br><br><br>
    <p>Calories:</p>
    <input type="number" [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>

    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
