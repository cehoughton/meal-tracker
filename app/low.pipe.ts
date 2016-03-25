import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
   name: "low",
   pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Food[], args) {
    var calorieCount = args[0];
    if(calorieCount === "low") {
      return input.filter(function(food) {
        return food.low;
      });
    } else if (calorieCount === "notLow") {
      return input.filter((food) => {
        return !food.low;
      });
    } else {
      return input;
    }
  }
}
