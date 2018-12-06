import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                }
            );
  }

  onAddIngredientsToList() {
    this.recipeService.setIngredientToList(this.recipe.ingredients);
  }

  onEditRecipe() {
      this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
