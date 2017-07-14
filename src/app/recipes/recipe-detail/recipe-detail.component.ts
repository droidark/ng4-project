import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipes.model';
import { ShoppingListService } from '../../shopping-list/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() inRecipe: Recipe;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    //this.inRecipe = new Recipe('', '', '');
  }

  reqIngredientsList() {
    this.shoppingListService.setIngredients(this.inRecipe.ingredients);
  }



}
