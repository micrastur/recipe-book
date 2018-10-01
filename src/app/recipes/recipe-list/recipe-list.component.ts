import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a text 1', 'https://toriavey.com/images/2015/04/Brisket-6-1.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a text 2', 'https://toriavey.com/images/2015/04/Brisket-6-1.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a text 3', 'https://toriavey.com/images/2015/04/Brisket-6-1.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
