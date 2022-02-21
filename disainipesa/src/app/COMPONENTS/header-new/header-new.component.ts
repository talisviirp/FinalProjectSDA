import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart.service';
import { CategoriesService } from 'src/app/SERVICES/categories.service';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.scss']
})
export class HeaderNewComponent implements OnInit {

  constructor(private cartService: CartService, private catServ: CategoriesService) { }
  totalItem: number = 0;
  categories: string [] = []
  subCategories: string [] = []

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this.categories = this.catServ.categories
    this.subCategories = this.catServ.subcategories
    console.log(this.subCategories[0]);

  }


}
