import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Seller } from '../seller';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
  authError = '';
  isAuthError = false;
  showLogin = true;
  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  signUp(data: Seller) {
    this.sellerService.sellerSignUp(data);
  }

  login(data: Seller) {
    this.sellerService.sellerLogin(data);
    this.sellerService.isLoginError.subscribe((isError) => {
      if (isError) {
        this.isAuthError = true;
        this.authError = 'Email or password is not correct';
      }
      setTimeout(() => {
        this.isAuthError = !this.isAuthError;
        this.authError = '';
      }, 3000);
    });
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }
}
