import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() shoppingElement: EventEmitter<Ingredient> = new EventEmitter();
  ingredient: Ingredient;
  
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    // console.log(this.nameInput.nativeElement.value);
    // console.log(this.amountInput.nativeElement.value);
    this.ingredient = new Ingredient(
      this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value
    );
    this.shoppingElement.emit(this.ingredient);
  }

}
