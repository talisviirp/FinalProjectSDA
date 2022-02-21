import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './CATEGORY/new/new.component';
import { ApplyComponent } from './PAGES/apply/apply.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ProductFormComponent } from './PAGES/product-form/product-form.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { UploadformComponent } from './PAGES/uploadform/uploadform.component';
import { CategoryComponent } from './CATEGORY/category/category.component';
import { LoginComponent } from './PAGES/AUTH/login/login.component';
import { RegisterComponent } from './PAGES/AUTH/register/register.component';
import { CartComponent } from './PAGES/cart/cart.component';
import { BrandComponent } from './PAGES/brand/brand.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'account/login', component: LoginComponent},
  {path: 'account/register', component: RegisterComponent},
  {path: 'category/:categoryName', component: CategoryComponent},
  {path: 'brand/:brandName', component: BrandComponent},
  {path: 'apply', component: ApplyComponent},
  {path: 'upload', component: UploadformComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'product-form', component: ProductFormComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
