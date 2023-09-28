import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowMenu]'
})
export class ShowMenuDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer2.listen('window', 'click', (e: any) => {
      const windowSize: number = window.innerWidth
      // permet d'appliquer la fonction onclikoutside si le client est en mode mobile/tablette
      if (windowSize <= 1024) {
        this.onClickOutside(e);
      }
    })
  }
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
      this.renderer2.addClass(this.el.nativeElement, "hamburger-animed")
      this.renderer2.setStyle(this.menu, "width", "200px");
      this.renderer2.setStyle(this.menu, "height", "100vh");
      this.renderer2.setStyle(this.list, "display", "block");
    } else {
      this.renderer2.removeClass(this.el.nativeElement, "hamburger-animed")
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

  // Permet de detecter le click en dehors du menu pour le cacher 
  onClickOutside(e: any) {
    // Cibles à verifier 
    const menu = this.list.parentElement;
    const cibleParent = e.target.parentElement;
    const cible = e.target;

    // Condition pour fermer le menu 
    if (e.target != menu && cibleParent != this.el.nativeElement && cible != this.el.nativeElement) {
      this.isVisible = false;
      this.toggleVisibility();
    }
  }
}
