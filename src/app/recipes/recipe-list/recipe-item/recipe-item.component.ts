import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() index: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes()[this.index];
  }
  
}
