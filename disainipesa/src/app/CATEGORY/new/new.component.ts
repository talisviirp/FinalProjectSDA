import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/SERVICES/item.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  products: any [] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // this.products = this.itemService.getProducts();
  }

}
