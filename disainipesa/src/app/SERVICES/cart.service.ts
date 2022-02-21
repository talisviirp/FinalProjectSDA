import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../PAGES/product-form/product.model'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);


  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product)
    this.productList.next(product)
  }
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList);

  }
  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((a: any)=> {
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any)=> {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList)
  }
  removeAll() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  // addProduct = (product: string) => {
  //   console.log('added', product);

  // }
}
