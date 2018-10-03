import { Directive, ElementRef, OnInit, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective implements OnInit {
	  @Input() appToggleClass: string;
  	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() { }

  	@HostListener('click', ['$event.currentTarget'])
  	onClick(btn) {
          btn.classList.contains(this.appToggleClass)
            ? this.renderer.removeClass(btn, this.appToggleClass)
            : this.renderer.addClass(btn, this.appToggleClass);
          console.log(btn.classList.contains(this.appToggleClass));
	}
}
