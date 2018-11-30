import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a text 1', 'https://toriavey.com/images/2015/04/Brisket-6-1.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a text 2', 'https://toriavey.com/images/2015/04/Brisket-6-1.jpg'),
        new Recipe('A Test Recipe 3', 'This is simply a text 3', 'https://toriavey.com/images/2015/04/Brisket-6-1.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
