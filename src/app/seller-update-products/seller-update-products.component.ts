import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-products',
  templateUrl: './seller-update-products.component.html',
  styleUrls: ['./seller-update-products.component.scss'],
})
export class SellerUpdateProductsComponent implements OnInit {
  productUpdatedMessage: undefined | string;
  productData: undefined | Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('id');
    productId &&
      this.productService.getProductById(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }

  update(product: Product) {
    if (this.productData) {
      product.id = this.productData.id;
    }

    this.productService.updateProduct(product).subscribe((result) => {
      if (result) {
        this.productUpdatedMessage = 'Product Data Updated Successfully!!';
      }
    });
    setTimeout(() => {
      this.productUpdatedMessage = undefined;
      this.router.navigate(['/seller-home']);
    }, 1500);
  }
}
