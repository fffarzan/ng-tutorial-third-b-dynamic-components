import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlacholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}