import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../recipes.model';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simple test',
      'http://images.enstarz.com/data/images/full/158524/kickass-torrents.jpg',
      [
        new Ingredient('Pineapple', 2),
        new Ingredient('Pear', 4),
        new Ingredient('Grapes', 6)
      ]
    ),
    new Recipe(
      'Second test recipe',
      'This is a simple test, again',
      'https://thepiratebay-proxylist.org/assets/img/tpb.jpg',
      [
        new Ingredient('Carrot', 3),
        new Ingredient('Radish', 7),
        new Ingredient('Onion', 9)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
