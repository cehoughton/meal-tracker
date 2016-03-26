import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-select',
  inputs: ['food'],
  outputs: ['onClick'],
  template: `
    <div class="food-select">
      
  `
})
