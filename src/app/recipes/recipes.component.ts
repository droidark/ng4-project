import { Component, OnInit, OnChanges } from '@angular/core';

import { Recipe } from './recipes.model';
import { RecipeService } from './shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnChanges {

  importRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.importRecipe = recipe
      }
    );
  }

  ngOnChanges() {
    console.log(this.importRecipe);
  }

}
