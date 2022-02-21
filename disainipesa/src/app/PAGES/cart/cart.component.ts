import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // stringState: boolean = true;
  products: any = [];
  grandTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    console.log("This is your list of products", this.products);
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);

  }
  // emptyCart(){
  //   this
  // }
  onClick() {
    // this.stringState = !this.stringState;
  }

}
