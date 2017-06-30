import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    item: string;
    @Output() activeItem: EventEmitter<any> = new EventEmitter();

    getActive() {
      this.activeItem.emit(this.item);
    }

    setActive(item) {
      this.item = item;
      this.getActive();
    }
}
