import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { FAQComponent } from './PAGES/faq/faq.component';
import { HomeComponent } from './PAGES/home/home.component';
import { WorkComponent } from './PAGES/work/work.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'work', component: WorkComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
