import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    updatedList = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Orange', 5),
        new Ingredient('Onion', 5),
        new Ingredient('Lemon', 5),
    ];
    private activeItemName = null;

    getIngredient() {
        return this.ingredients.slice();
    }

    onAddItem(newItem: any) {
        this.ingredients.push(new Ingredient(newItem.name, newItem.amount));
        this.updatedList.next(this.ingredients.slice());
    }

    onDeleteItem() {
        for (const item of this.ingredients) {
            const { activeItemName } = this;
            if (!activeItemName) {
              return;
            }
            const deletedItem = activeItemName && item.name === activeItemName;
            deletedItem && this.ingredients.splice(this.ingredients.indexOf(item), 1);
            this.updatedList.next(this.ingredients.slice());
        }
    }

    onClearItems() {
        this.ingredients = [];
        this.updatedList.next(this.ingredients.slice());
    }

    setActiveItem(itemName: string) {
        this.activeItemName = itemName;
    }

    onAddIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.updatedList.next(this.ingredients.slice());
    }
}
