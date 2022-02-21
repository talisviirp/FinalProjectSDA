import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';

import { ItemService } from './SERVICES/item.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SignupBannerComponent } from './COMPONENTS/signup-banner/signup-banner.component';
import { NewComponent } from './CATEGORY/new/new.component';
import { UploadformComponent } from './PAGES/uploadform/uploadform.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { ProductFormComponent } from './PAGES/product-form/product-form.component';
import { ApplyComponent } from './PAGES/apply/apply.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { HeaderNewComponent } from './COMPONENTS/header-new/header-new.component';
import { CategoryComponent } from './CATEGORY/category/category.component';
import { LoginComponent } from './PAGES/AUTH/login/login.component';
import { RegisterComponent } from './PAGES/AUTH/register/register.component';
import { NavigationService } from '../app/SERVICES/navigation.service';
import { CartComponent } from './PAGES/cart/cart.component';
import { CarouselTestComponent } from './COMPONENTS/carousel-test/carousel-test.component';
import { BrandComponent } from './PAGES/brand/brand.component';
import { AuthService } from './SERVICES/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupBannerComponent,
    NewComponent,
    UploadformComponent,
    ProductsComponent,
    ProductFormComponent,
    ApplyComponent,
    FooterComponent,
    HeaderNewComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CarouselTestComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [ItemService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
