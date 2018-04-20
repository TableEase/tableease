import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appOpen]'
})
export class ToggleOpenDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elRef: ElementRef, private rend: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    // this.rend.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.rend.removeClass(this.elRef.nativeElement, 'hide');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
