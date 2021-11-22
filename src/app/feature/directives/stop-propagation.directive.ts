import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stop-propagation]',
})
export class StopPropagationDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
    // console.log('stop-propagation works', event);
  }
}
