import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addedItem = new EventEmitter<{name: string, amount: string}>();
  @Output() deletedItem = new EventEmitter<void>();
  @Output() clearItems = new EventEmitter<void>();

  itemName: string;
  itemAmount: string;

  constructor() { }

  ngOnInit() {
  }

  onItemAdd() {
    this.addedItem.emit({
      name: this.itemName,
      amount: this.itemAmount
    });
  }

  onItemDelete(e) {
    this.deletedItem.emit();
  }

  onItemClear() {
    this.clearItems.emit();
  }
}
