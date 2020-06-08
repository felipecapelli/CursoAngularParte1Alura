import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{
    
    @Input() brightness = '70%';

    constructor(
        private el: ElementRef, 
        private render: Renderer2
        ){}

    @HostListener('mouseover')
    darkenOn(){
        //console.log('ON----------------------------------');
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        //console.log('ON----------------------------------');
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}