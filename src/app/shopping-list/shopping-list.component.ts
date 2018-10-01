import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Orange', 5),
    new Ingredient('Onion', 5),
    new Ingredient('Lemon', 5),
  ];
  activeItemName = null;
  constructor() { }

  ngOnInit() {
  }

  onListItemSelect(e) {
    this.activeItemName = e.currentTarget.dataset.itemName;
  }

  onAddedItem(newItem) {
    this.ingredients.push(new Ingredient(newItem.name, newItem.amount));
  }

  onDeletedItem() {
    for (const item of this.ingredients) {
      const { activeItemName } = this;
      if (!activeItemName) {
        return;
      }
      const deletedItem = activeItemName && item.name === activeItemName;
      deletedItem && this.ingredients.splice(this.ingredients.indexOf(item), 1);
    }
  }

  onClearedItems() {
    this.ingredients = [];
  }
}
