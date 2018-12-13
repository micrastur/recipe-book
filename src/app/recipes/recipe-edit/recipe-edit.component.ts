import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;
    recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
            }
        );
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
        console.log(this.recipeForm);
        const newRecipe = new Recipe(
            this.recipeForm.value.title,
            this.recipeForm.value.description,
            '',
            this.recipeForm.value.ingredients
        );
        this.recipeService.onAddRecipe(newRecipe);
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
}
