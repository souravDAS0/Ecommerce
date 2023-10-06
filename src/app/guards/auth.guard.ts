import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _sellerService = inject(SellerService);
  if (localStorage.getItem('seller')) {
    return true;
  } else {
    return _sellerService.isSellerLoggedIn;
  }
};
