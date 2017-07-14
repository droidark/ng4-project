import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  setIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientToShoppingList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
