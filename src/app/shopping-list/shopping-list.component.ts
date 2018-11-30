import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];
    activeItemName = null;
    constructor( private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredient();
        this.shoppingListService.updatedList.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    onListItemSelect(e) {
        const activeItemName = e.currentTarget.dataset.itemName;
        this.shoppingListService.setActiveItem(activeItemName);
    }

}
