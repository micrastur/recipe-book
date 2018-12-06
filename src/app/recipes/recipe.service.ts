import { Recipe } from '../shared/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1',
            'This is simply a text 1',
            'http://domashniy-restoran.com.ua/uploads/posts/2013-12/9wdbwv1lzp.jpg',
            [
                new Ingredient('Fish', 1)
            ]
        ),
        new Recipe(
            'A Test Recipe 2',
            'This is simply a text 2',
            'https://toriavey.com/images/2015/04/Brisket-6-1.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Tomato', 3)
            ]
        ),
        new Recipe(
            'A Test Recipe 3',
            'This is simply a text 3',
            'http://receptiki.pro/uploads/posts/2014-06/1402581230_contentimage-454-79599-img_3012_2.jpg',
            [
                new Ingredient('Meat', 2),
            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    setIngredientToList(ingredients: Ingredient[]) {
        this.shoppingListService.onAddIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}
