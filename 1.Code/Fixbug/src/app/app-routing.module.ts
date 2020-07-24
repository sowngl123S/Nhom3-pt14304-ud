import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AgileUserComponent } from './agile-user/agile-user.component';


const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'agile', component:AgileUserComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shop', component: ProductComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin', component: AdminComponent,
  children:[
   {path: '', redirectTo:'product', pathMatch:'full'},
   {path: 'product', component: ProductListComponent},
   {path: 'add', component: AddComponent},
   {path: 'edit/:productID', component: EditProductComponent},
  {path: 'delete/:productID', component: DeleteProductComponent}
  ]},
  {path: 'product/:productID', component: ProductDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
