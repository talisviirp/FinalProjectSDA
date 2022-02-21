import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories: string []  = ['Trending', 'New', 'Home Decor', 'Food & Drink', 'Women', 'Men', 'Beauty & Wellness', 'Kids & Baby', 'Jewelry', 'Pets']

  subcategories: any [] = [['Hot', 'Test', 'Sub'], ['New', 'New', 'New'], [3], [4], [5], [6], [7], [8], [9], [10]]
  constructor() { }

  getCategory() {
    this.categories
    this.subcategories
  }
}
