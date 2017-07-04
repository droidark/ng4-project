import { Component, OnInit, OnChanges } from '@angular/core';

import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnChanges {

  importRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.importRecipe);
  }
  
}
