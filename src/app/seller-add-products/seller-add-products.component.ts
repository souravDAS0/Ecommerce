import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-products',
  templateUrl: './seller-add-products.component.html',
  styleUrls: ['./seller-add-products.component.scss'],
})
export class SellerAddProductsComponent implements OnInit {
  productAddedMessage!: string | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  add(value: Product) {
    this.productService.addProduct(value).subscribe((result) => {
      if (result) {
        this.productAddedMessage = 'Product is Successfully added!';
      }
      setTimeout(() => {
        this.productAddedMessage = undefined;
        this.router.navigate(['/seller-home']);
      }, 1500);
    });
  }
}
