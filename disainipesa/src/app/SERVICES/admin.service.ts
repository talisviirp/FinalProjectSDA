import { Injectable } from '@angular/core';
import { Product } from '../PAGES/product-form/product.model'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore: AngularFirestore) {
  }
  addProduct(value: Product) {
    return this.firestore.collection('products').add(value)
  }
  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges()
  }
}
