import { Injectable } from '@angular/core';
import { Product } from '../PAGES/product-form/product.model'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { collection, query, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  categoryCollection: AngularFirestoreCollection<Product[]>

  constructor(private firestore: AngularFirestore) {

    this.categoryCollection = this.firestore.collection('products')
  }
  // Fetch all products from db
  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges()
  }
  getProductsByCategory(category: string) {
    return this.categoryCollection = this.firestore.collection<Product[]>('products', ref => {
      return ref.where('category', '==', category)
    })
  }
  // getProductsByCategory(value: string | undefined) {
  //   return this.products.filter(products => products.category == value);
  // }
  // getProductsByBrand(value: string | undefined) {
  //   return this.products.filter(products => products.brand == value);
  // }
  // getSingleProduct(id: any) {
  //   return this.products.find(products => products.id == id );
  // }
  // getSinglePost(id: any) {
  //   return this.products.find(post => post.id == id );
  // }
}

