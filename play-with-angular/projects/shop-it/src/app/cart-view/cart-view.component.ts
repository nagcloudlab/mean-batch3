import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {

  @Input()
  cart!: Array<any>

  @ViewChild("cartHeader")
  cartHeader!: ElementRef

  timeNow!: string
  intervalId!: any

  constructor() {
    console.log("CartViewComponent::constructor()");
    // console.log(this.cart);
    // why we need?
    // todo any one-time intialization
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("CartViewComponent::ngOnChanges()");
    console.log(changes);
    // why we need ?
    // by comparing current-input-props with previous
    // to any side-effect ( data-fetching , ...)
  }

  ngOnInit() {
    console.log("CartViewComponent::ngOnInit()");
    console.log(this.cart);
    // why we need ?
    // todo any one-time intialization
    // e.g subscribing with observable-streams, start-timer
    this.intervalId = setInterval(() => {
      console.log("tick");
      this.timeNow = new Date().toLocaleTimeString()
    }, 1000);
  }

  ngOnDestroy() {
    console.log("CartViewComponent::ngOnDestroy()");
    // why we need?
    // to cleanup actions
    clearInterval(this.intervalId)
  }

  ngAfterViewInit() {
    console.log("CartViewComponent::ngAfterViewInit()");
    // why we need?
    // to do any low-level operations on View DOM elements
    // const cartHeaderNativeEle = this.cartHeader.nativeElement;
    // cartHeaderNativeEle.addEventListener('mouseover', (e: any) => {
    //   cartHeaderNativeEle.style.backgroundColor = "yellow";
    // })
    // cartHeaderNativeEle.addEventListener('mouseleave', (e: any) => {
    //   cartHeaderNativeEle.style.backgroundColor = "";
    // })
  }

}
