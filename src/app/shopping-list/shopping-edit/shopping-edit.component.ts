import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() deletedItem = new EventEmitter<void>();
  @Output() clearItems = new EventEmitter<void>();

  itemName: string;
  itemAmount: string;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onItemAdd() {
    this.shoppingListService.onAddItem({
      name: this.itemName,
      amount: this.itemAmount
    });
  }

  onItemDelete() {
    this.shoppingListService.onDeleteItem();
  }

  onItemClear() {
    this.shoppingListService.onClearItems();
  }
}
