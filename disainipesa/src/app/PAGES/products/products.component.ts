import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RoutesRecognized } from '@angular/router';
import { ItemService } from 'src/app/SERVICES/item.service';
import { CartService } from 'src/app/SERVICES/cart.service';
import { NavigationService } from 'src/app/SERVICES/navigation.service';
import { Product } from '../product-form/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  productId: any;
  productInfo: Product[] = []

  constructor(private route: ActivatedRoute, private itemService: ItemService, private cartService: CartService, private naviService: NavigationService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.has('id')) {
        this.productId = param.get('id');
        console.log('Id:', this.productId);
      }
      this.itemService.getProducts().subscribe(res => {
        this.productInfo = res.filter(products => products.id == this.productId)
        console.log('ProductInfo:', this.productInfo);

      })

    })
  }
  onAddToCartClick(productInfo: any) {
    // console.log(this.productInfo);
    this.cartService.addToCart(this.productInfo);
  }
}
