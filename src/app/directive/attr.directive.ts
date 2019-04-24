import { Directive,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @HostBinding('style.border') private border:string;
  @HostListener('mouseover') onHover()
  {
    //this.er.nativeElement.style.backgroundColor="green";
    this.border="2px solid green";
  }
  constructor(private er:ElementRef) { 
    this.er.nativeElement.style.color="red";
    this.er.nativeElement.style.backgroundColor="yellow";
  }

}
