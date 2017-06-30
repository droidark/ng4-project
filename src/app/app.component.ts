import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeItem: string = 'Recipes';

  getActiveItem(item){
    this.activeItem = item;
  }

}
