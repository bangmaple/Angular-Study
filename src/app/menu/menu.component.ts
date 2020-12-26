import { Component, OnInit } from '@angular/core';
import {DISHES} from '../shared/dishes';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;

  selectedDish: Dish;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

}
