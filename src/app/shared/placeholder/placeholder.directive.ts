import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlacholderDirective {
  /**
   * `ViewContainerRef` gives access to the reference to a pointer 
   * at the place where this directive is and used.
   * 
   * Note: We define it `public` because we needto access it form 
   * the DOM.
   */
  constructor(public viewContainerRef: ViewContainerRef) {

  }
}