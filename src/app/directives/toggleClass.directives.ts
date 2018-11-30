import { Directive, ElementRef, OnInit, HostListener, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen;
    }
}
