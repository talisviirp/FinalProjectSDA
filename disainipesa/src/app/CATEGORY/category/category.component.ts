import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/SERVICES/item.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { doc, getDoc } from "firebase/firestore";
import { AdminService } from 'src/app/SERVICES/admin.service';
import { Product } from '../../PAGES/product-form/product.model'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryName: any | null = ''
  products: Product [] = []
  hasProducts: boolean = true


  constructor(private route: ActivatedRoute, private itemService: ItemService, private db: AngularFirestore, private adminService: AdminService) { }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(param => {
      if (param.has('categoryName')) {
        this.categoryName = param.get('categoryName')
      }
      this.itemService.getProducts().subscribe(res => {
        this.products = res.filter(products => products.category == this.categoryName)
        if (this.products.length != 0) {
          this.hasProducts = true
        } else {
          this.hasProducts = false
        }
        console.log(this.hasProducts);

        console.log(this.products);
      })
    })
  }

}
