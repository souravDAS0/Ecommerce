import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './guards/auth.guard';
import { SellerAddProductsComponent } from './seller-add-products/seller-add-products.component';
import { SellerUpdateProductsComponent } from './seller-update-products/seller-update-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'seller-add-products',
    component: SellerAddProductsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'seller-update-products/:id',
    component: SellerUpdateProductsComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
