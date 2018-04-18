import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appOpenClose]'
})
export class OpenCloseDirective {
  @Input()
  set appOpenClose(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  // @HostBinding() wasClicked = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  // @HostListener('click')
  // elClicked(event: Event) {
  //   this.wasClicked = !this.wasClicked;
  // }
}
