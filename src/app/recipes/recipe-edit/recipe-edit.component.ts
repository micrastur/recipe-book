import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/shared/recipe.model';
import { CanDeactivateRecipeLink } from '../recipe-list/recipe-item/can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, CanDeactivateRecipeLink {
    id: number;
    recipeForm: FormGroup;
    isDataSaved = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }
    ngOnInit() {
        this.recipeForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            ingredients: new FormArray([])
        });
    }

    validateField(fieldName) {
        const { controls: formControls } = this.recipeForm;
        return formControls[fieldName].invalid && formControls[fieldName].touched;
    }

    onSubmit() {
        const newRecipe = new Recipe(
            this.recipeForm.value.title,
            this.recipeForm.value.description,
            '',
            this.recipeForm.value.ingredients
        );
        this.recipeService.onAddRecipe(newRecipe);
        this.isDataSaved = !this.isDataSaved;
        const lastAddedRecipeIndex = this.recipeService.getRecipes().length - 1;
        this.router.navigate(['../', lastAddedRecipeIndex], {relativeTo: this.route});
    }

    setIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                name: new FormControl(null, Validators.required),
                amount: new FormControl(null, Validators.required)
            })
        );
    }
    onDeleteIngredient(index) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.isDataSaved) {
            return true;
        }
    }
}
