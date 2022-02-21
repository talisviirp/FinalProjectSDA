import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/SERVICES/item.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brandName: any | null = '';
  products: any [] = [];
  productInfo: any;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(param => {
    //   if (param.has('brandName')) {
    //     this.brandName = param.get('brandName')
    //   }
    //   this.products = this.itemService.getProductsByBrand(this.brandName);
    // })
  }

}
