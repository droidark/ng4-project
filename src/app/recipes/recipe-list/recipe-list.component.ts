import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simple test',
    'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-06.jpg'),
    new Recipe('Second test recipe', 'This is a simple test, again',
    'https://thepiratebay-proxylist.org/assets/img/tpb.jpg')
  ];

  @Output() selectRecipe: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setRecipe(inputRecipe){
    this.selectRecipe.emit(inputRecipe)
  }

}
