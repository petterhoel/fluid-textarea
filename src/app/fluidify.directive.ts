import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFluidify]'
})
export class FluidifyDirective implements AfterViewInit {

  constructor(private host: ElementRef) { }

  @HostListener('keydown')
  handleResizeOnEvent(): void {
    this.resize();
}

  private resize(): void {
    const elm = this.host.nativeElement;
    elm.style.height = 'auto';
    elm.style.height = elm.scrollHeight + 'px';
    elm.style.minHeight = '30px';
  }

  ngAfterViewInit(): void {
    this.resize();
  }

}
