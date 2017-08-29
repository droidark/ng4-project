import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../shared/recipe.service';
import { ShoppingListService } from '../../shopping-list/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  inRecipe: Recipe;


  constructor(private recipeService: RecipeService, 
      private shoppingListService: ShoppingListService, 
      private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.inRecipe = this.recipeService.getRecipes()[+params['index']];
      }
    );  
  }

  reqIngredientsList() {
     this.shoppingListService.setIngredients(this.inRecipe.ingredients);
  }



}
