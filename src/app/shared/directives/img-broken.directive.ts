import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(){

    const element = this.elHost.nativeElement;
    element.src = 'https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg'


    console.log('Algo sucedio 😢');
  }

  constructor(private elHost:ElementRef) { }

}
