import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowMenu]'
})
export class ShowMenuDirective {

  constructor(private el: ElementRef, private renderer2: Renderer2) { }
  isVisible: boolean = false
  @Input('list') list !: HTMLUListElement;
  @Input('menu') menu !: HTMLDivElement;
  @HostListener("click")
  showMenu() {
    this.isVisible = !this.isVisible;
    this.toggleVisibility()
  }

  toggleVisibility() {
    if (this.isVisible) {
      this.renderer2.setStyle(this.menu, "width", "200px");
      this.renderer2.setStyle(this.menu, "height", "100vh");
      this.renderer2.setStyle(this.list, "display", "block");
    } else {
      this.renderer2.setStyle(this.menu, "width", "0px");
      this.renderer2.setStyle(this.menu, "height", "0vh");
      this.renderer2.setStyle(this.list, "display", "none");

    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const windowSize: number = event.currentTarget.innerWidth;
    if (windowSize > 1024) {
      this.renderer2.setStyle(this.menu, "width", "60%");
      this.renderer2.removeStyle(this.menu, "height")
      this.renderer2.setStyle(this.menu, "align-items", "end");
      this.renderer2.setStyle(this.menu, "transition", "width 0.3s, height 0.3s");
      this.renderer2.setStyle(this.list, "display", "flex");
    } else {
      this.toggleVisibility();
    }

  }
}
