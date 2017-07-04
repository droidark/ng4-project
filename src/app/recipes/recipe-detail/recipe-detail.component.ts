import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() inRecipe: Recipe;
  

  constructor() { 
    
  }

  ngOnInit() {
    //this.inRecipe = new Recipe('', '', '');
  }
    
}
