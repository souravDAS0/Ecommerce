import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sellerName!: string;
  menuType: string = 'default';
  constructor(private router: Router, private sellerService: SellerService) {}

  ngOnInit(): void {
    this.router.events.subscribe((data: any) => {
      if (data.url) {
        if (localStorage.getItem('seller') && data.url.includes('seller')) {
          this.menuType = 'seller';
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
    this.sellerService.isSellerLoggedIn.next(false);
  }
}
