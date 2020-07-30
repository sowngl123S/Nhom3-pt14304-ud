import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service'
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BannerComponent } from './banner/banner.component';
import { FashionComponent } from './fashion/fashion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AgileUserComponent } from './agile-user/agile-user.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    NotFoundComponent,
    BannerComponent,
    FashionComponent,
    AddComponent,
    CheckoutComponent,
    ContactComponent,
    DeleteProductComponent,
    EditProductComponent,
    HeaderTopComponent,
    ProductComponent,
    ProductDetailComponent,
    AdminComponent,
    AgileUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
