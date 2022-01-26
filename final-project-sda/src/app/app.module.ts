import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PAGES/home/home.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeMainComponent } from './COMPONENTS/home-main/home-main.component';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { WorkComponent } from './PAGES/work/work.component';
import { FAQComponent } from './PAGES/faq/faq.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { ContactFormComponent } from './COMPONENTS/contact-form/contact-form.component';
import { TestJSComponent } from './test-js/test-js.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeMainComponent,
    AboutUsComponent,
    ContactComponent,
    WorkComponent,
    FAQComponent,
    FooterComponent,
    ContactFormComponent,
    TestJSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
