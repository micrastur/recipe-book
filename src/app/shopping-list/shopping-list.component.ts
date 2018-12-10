import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    activeItemName = null;
    updateListSubscription: Subscription;
    constructor( private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredient();
        this.updateListSubscription = this.shoppingListService.updatedList.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    onListItemSelect(e) {
        const activeItemName = e.currentTarget.dataset.itemName;
        this.shoppingListService.setActiveItem(activeItemName);
    }

    ngOnDestroy() {
        this.updateListSubscription.unsubscribe();
    }

}
