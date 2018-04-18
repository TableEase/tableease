import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
  Output
} from '@angular/core';

@Directive({
  selector: '[appAllergySelect]'
})
export class AllergySelectDirective {
  @HostBinding('style.backgroundColor') backgroundColor = '#e4e4e4';
  @HostBinding('style.color') fontColor = 'black';

  constructor() {}

  @HostListener('click')
  allergySelect(event: Event) {
    if (this.backgroundColor !== '#26a69a') {
      this.backgroundColor = '#26a69a';
      this.fontColor = 'white';
    } else {
      this.backgroundColor = '#e4e4e4';
      this.fontColor = 'black';
    }
  }
}
