import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  switch: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(eventData: Event) {
    this.switch = !this.switch;
    this.switch ?
      this.renderer.addClass(this.elRef.nativeElement, 'show') :
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
    }
}
